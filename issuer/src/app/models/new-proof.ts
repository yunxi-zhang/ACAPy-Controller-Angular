export class NewProof {
    constructor() { }

    updateBodyPayLoadTemplate(comment, connectionID, requestName, requestedAttributes, requestedPredicates, nonRevoked) {
        this.bodyPayloadTemplate.comment = comment;
        this.bodyPayloadTemplate.connection_id = connectionID;
        this.bodyPayloadTemplate.proof_request.name = requestName;
        this.bodyPayloadTemplate.proof_request.requested_attributes = requestedAttributes;
        this.bodyPayloadTemplate.proof_request.requested_predicates = requestedPredicates;
        this.bodyPayloadTemplate.proof_request.non_revoked.to = nonRevoked;
        return this;
    }

    bodyPayloadTemplate: any = {
        "comment": "",
        "connection_id": "",
        "proof_request": {
            "name": "",
            "nonce": "1234567890",
            "requested_attributes": {},
            "requested_predicates": {},
            "non_revoked": {
                "to": ""
            },
            "version": "1.0"
        },
        "trace": false
    }
}