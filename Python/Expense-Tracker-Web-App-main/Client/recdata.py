from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import DocumentAnalysisClient
import firebase_admin
from firebase_admin import credentials, db
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

# Replace with your Azure Form Recognizer endpoint and key
form_recognizer_endpoint = "https://centralindia.api.cognitive.microsoft.com/"
form_recognizer_key = "f65a14e65e604936a4236b24f4a7dffa"

# Replace with the path to your Firebase Admin SDK JSON file
firebase_credentials_path = "./demoauro-ff378-firebase-adminsdk-n4n2w-bf00647ec5.json"

# Initialize Firebase Admin SDK
cred = credentials.Certificate(firebase_credentials_path)
firebase_admin.initialize_app(cred, {'databaseURL': 'https://demoauro-ff378-default-rtdb.asia-southeast1.firebasedatabase.app/'})

# sample document
url = "https://raw.githubusercontent.com/Azure/azure-sdk-for-python/main/sdk/formrecognizer/azure-ai-formrecognizer/tests/sample_forms/receipt/contoso-receipt.png"

document_analysis_client = DocumentAnalysisClient(
    endpoint=form_recognizer_endpoint, credential=AzureKeyCredential(form_recognizer_key)
)

@app.route('/analyze_receipt', methods=['GET', 'POST'])
def analyze_receipt():
    try:
        # Get the URL of the image from the request JSON
        data = request.json
        form_url = data.get('formUrl')
        poller = document_analysis_client.begin_analyze_document_from_url("prebuilt-receipt", url)
        receipts = poller.result()

        # Dictionary to store receipt data
        receipt_data = {}

        for idx, receipt in enumerate(receipts.documents):
            receipt_info = {}
            receipt_type = receipt.doc_type
            if receipt_type:
                receipt_info["Receipt Type"] = receipt_type

            merchant_name = receipt.fields.get("MerchantName")
            if merchant_name:
                receipt_info["Merchant Name"] = {
                    "value": merchant_name.value
                }

            transaction_date = receipt.fields.get("TransactionDate")
            if transaction_date:
                # Convert date to string
                transaction_date_str = transaction_date.value.isoformat()
                receipt_info["Transaction Date"] = {
                    "value": transaction_date_str
                }

            # Add more fields as needed
            payment_method = receipt.fields.get("PaymentMethod")
            if payment_method:
                receipt_info["Payment Method"] = {
                    "value": payment_method.value
                }
            receipt_number = receipt.fields.get("ReceiptNumber")
            if receipt_number:
                receipt_info["Receipt Number"] = {
                    "value": receipt_number.value
                }
            # Extracting 'Items'
            items = receipt.fields.get("Items")
            if items and items.value:
                receipt_info["Items"] = []

                for item in items.value:
                    item_data = {}
                    # Extracting item details
                    item_description = item.value.get("Description")
                    if item_description:
                        item_data["Description"] = {
                            "value": item_description.value
                        }

                    item_quantity = item.value.get("Quantity")
                    if item_quantity:
                        item_data["Quantity"] = {
                            "value": item_quantity.value
                        }

                    item_price = item.value.get("Price")
                    if item_price:
                        item_data["Price"] = {
                            "value": item_price.value
                        }

                    item_total_price = item.value.get("TotalPrice")
                    if item_total_price:
                        item_data["Total Price"] = {
                            "value": item_total_price.value
                        }
        ref=db.reference('/receipts')
        new_receipt_ref=ref.push(receipt_data)
        return jsonify({'result':'success','data':receipt_data})
    except Exception as e:
        return jsonify({'result':'error','error_message':str(e)})



if __name__=='__main__':
    app.run(debug=True)

"""
import requests

url = "http://127.0.0.1:5000/analyze_receipt"
data = {"formUrl": "https://example.com/your-image.jpg"}

response = requests.post(url, json=data)
result = response.json()

print(result)

"""

"""
Please put in the necessary details of the firebase database in order to store the data 
"""