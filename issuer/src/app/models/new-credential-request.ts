export class NewCredentialRequest {
    newAttributeKeyValuePair: any = {};
    constructor() {
    }
    addNewAttributeKeyPair(attributeName: string[], attributeValue: string[], connectionID, comment) {
        //dynamically update values in the bodyPayloadTemplate
        for (let i = 0; i < attributeName.length; i++) {
            this.attributePair = {};
            this.attributePair['name'] = attributeName[i];
            this.attributePair['value'] = attributeValue[i];
            this.bodyPayloadTemplate.credential_preview.attributes.push(this.attributePair);
        }
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

    attributePair: any;
}