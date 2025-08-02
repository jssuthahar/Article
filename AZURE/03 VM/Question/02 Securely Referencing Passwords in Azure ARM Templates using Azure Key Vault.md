# 🔐 Securely Referencing Passwords in Azure ARM Templates using Azure Key Vault

## 📘 What is an Azure Resource Manager (ARM) Template?

An **ARM (Azure Resource Manager) template** is a **JSON** file used to define and deploy Azure resources in a **declarative** manner. It allows you to describe *what* resources you want and their properties, without needing to write the procedural logic of *how* to create them.

### ✅ Key Benefits:
- **Infrastructure as Code**: Automate infrastructure setup using version-controlled templates.
- **Repeatability**: Same template can be used across different environments (Dev, Test, Prod).
- **Parameterization**: Allows dynamic values using `parameters` section.
- **Modularity**: Can include or link to other templates for complex solutions.
- **Secure by Design**: Can integrate with services like Azure Key Vault to protect sensitive information.

---

## 🧠 Real-Time Use Case

### Scenario:
Your team needs to provision **multiple virtual machines (VMs)** for a training session or a batch of new developers. Each VM requires an **administrator password**, but it’s critical that this password is **not exposed in plain text** in your source code or ARM template.

### Goal:
Use **Azure Key Vault** to securely store the admin password, and configure the ARM template to reference it at deployment time.

---

## 🎯 Objective

Secure the admin password used in the VM deployment template by:
1. Storing it in Azure Key Vault.
2. Assigning appropriate access policies or RBAC permissions.
3. Referencing the Key Vault secret inside the ARM template.

---

## 📦 Components Required

| **Task**                                          | **What to Create / Use**                      |
|--------------------------------------------------|-----------------------------------------------|
| Store password securely                          | 🔐 Azure Key Vault Secret                     |
| Grant ARM template access to secret              | 🛡️ Key Vault Access Policy / Role Assignment  |
| Reference password in template                   | 📎 Key Vault Reference in ARM Template        |

---

## 🛠️ Step-by-Step Implementation

### 1. 🔐 Create Azure Key Vault and Secret

```bash
az keyvault create --name MyKeyVault --resource-group MyResourceGroup --location eastus

az keyvault secret set --vault-name MyKeyVault --name adminPassword --value "SuperSecurePassword123!"
````

---

### 2. 🛡️ Assign Access Policy or Role

Assign a **managed identity** or **deployment identity (service principal)** permission to **read secrets**:

```bash
az keyvault set-policy \
  --name MyKeyVault \
  --object-id <your-managed-identity-object-id> \
  --secret-permissions get
```

Or use Azure RBAC:

```bash
az role assignment create \
  --assignee <your-managed-identity-principal-id> \
  --role "Key Vault Secrets User" \
  --scope /subscriptions/<sub-id>/resourceGroups/MyResourceGroup/providers/Microsoft.KeyVault/vaults/MyKeyVault
```

---

### 3. 📎 Modify ARM Template to Reference the Key Vault Secret

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "adminUsername": {
      "type": "string",
      "defaultValue": "azureuser"
    },
    "adminPassword": {
      "type": "securestring",
      "defaultValue": null,
      "reference": {
        "keyVault": {
          "id": "/subscriptions/<sub-id>/resourceGroups/MyResourceGroup/providers/Microsoft.KeyVault/vaults/MyKeyVault"
        },
        "secretName": "adminPassword"
      }
    }
  },
  "resources": [
    {
      "type": "Microsoft.Compute/virtualMachines",
      "apiVersion": "2021-07-01",
      "name": "secureVM",
      "location": "[resourceGroup().location]",
      "properties": {
        "osProfile": {
          "computerName": "secureVM",
          "adminUsername": "[parameters('adminUsername')]",
          "adminPassword": "[parameters('adminPassword')]"
        },
        "hardwareProfile": {
          "vmSize": "Standard_B1s"
        },
        ...
      }
    }
  ]
}
```

---

## ✅ DRAG & DROP Mapping Answer

| **Task**                                    | **What to Use**                             |
| ------------------------------------------- | ------------------------------------------- |
| Store admin password securely               | ✅ Azure Key Vault Secret                    |
| Grant access to read the password           | ✅ Access Policy or Role Assignment          |
| Use password in the ARM deployment template | ✅ Key Vault Reference in Template Parameter |

---

## 💡 Best Practices

* **Never store secrets directly** in the template or parameter files.
* **Use secureString** or `reference` with Key Vault for sensitive parameters.
* **Restrict access** to Key Vault with least privilege.
* **Audit access** using Azure Monitor and Key Vault diagnostic logs.

---

## 📎 Additional References

* [Azure ARM Template Documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)
* [Secure secrets in templates using Key Vault](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/key-vault-parameter)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

