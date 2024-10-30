# Usage: .\find_large_files.ps1 -Size 10485760  # 10MB in bytes
param (
    [string]$Size
)

Get-ChildItem -Path . -Recurse -File | Where-Object { $_.Length -gt [int64]::Parse($Size) } | ForEach-Object { $_.FullName } > ./large_files.txt