export class SendOffer {
    constructor() {}

    updateBodyPayLoadTemplate(comment, connectionID, attributes, credDefID, issuerDID, schemaID, schemaIssuerDID, schemaName, schemaVersion, autoIssue, autoRemove, trace) {
        this.bodyPayloadTemplate.comment = comment;
        this.bodyPayloadTemplate.conn_id = connectionID;
        this.bodyPayloadTemplate.cred_preview.attributes = Array.from(attributes);
        this.bodyPayloadTemplate.filter.indy.cred_def_id = credDefID;
        this.bodyPayloadTemplate.filter.indy.issuer_did = issuerDID;
        this.bodyPayloadTemplate.filter.indy.schema_id = schemaID;
        this.bodyPayloadTemplate.filter.indy.schema_issuer_did = schemaIssuerDID;
        this.bodyPayloadTemplate.filter.indy.schema_name = schemaName;
        this.bodyPayloadTemplate.filter.indy.schema_version = schemaVersion;
        this.bodyPayloadTemplate.auto_issue = autoIssue;
        this.bodyPayloadTemplate.auto_remove = autoRemove;
        this.bodyPayloadTemplate.trace = trace;
        return this;
    }

    bodyPayloadTemplate: any = {
        "auto_issue": "",
        "auto_remove": "",
        "comment": "",
        "conn_id": "",
        "cred_preview": {
            "@type": "issue-credential/2.0/credential-preview",
            "attributes": []
        },
        "filter": {
            "dif": {
                "some_dif_criterion": "string"
            },
            "indy": {
                "cred_def_id": "",
                "issuer_did": "",
                "schema_id": "",
                "schema_issuer_did": "",
                "schema_name": "",
                "schema_version": ""
            }
        },
        "trace": ""
    }
}