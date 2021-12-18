export class NewCredentialRequest {
    newAttributeKeyValuePair: any = {};
    constructor() {
    }
    addNewAttributeKeyPair(attributeName, attributeValue, connectionID, comment) {
        //dynamically update values in the bodyPayloadTemplate
        this.newAttributeKeyValuePair.name = attributeName;
        this.newAttributeKeyValuePair.value = attributeValue;
        this.bodyPayloadTemplate.credential_preview.attributes.push(this.newAttributeKeyValuePair);
        this.bodyPayloadTemplate.connection_id = connectionID;
        this.bodyPayloadTemplate.comment = comment;
        //TO DO
        //dynamically update values of other fields if needed
        return this;
    }

    bodyPayloadTemplate: any = {
        "auto_remove": true,
        "comment": "",
        "connection_id": "",
        "credential_preview": {
            "@type": "issue-credential/2.0/credential-preview",
            "attributes": []
        },
        "filter": {
            "dif": {
                "some_dif_criterion": "string"
            },
            "indy": {
            }
        },
        "trace": false
    };
}