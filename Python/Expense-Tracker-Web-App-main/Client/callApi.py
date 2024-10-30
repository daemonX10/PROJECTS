import requests
import json

url = "http://127.0.0.1:5000/analyze_receipt"
# url = "https://raw.githubusercontent.com/Azure/azure-sdk-for-python/main/sdk/formrecognizer/azure-ai-formrecognizer/tests/sample_forms/receipt/contoso-receipt.png"
data = {"formUrl": "https://raw.githubusercontent.com/Azure/azure-sdk-for-python/main/sdk/formrecognizer/azure-ai-formrecognizer/tests/sample_forms/receipt/contoso-receipt.png"}
headers = {"content-type": "application/json"}
response = requests.post(url, data=json.dumps(data), headers=headers)
result = response.json()

print(result)