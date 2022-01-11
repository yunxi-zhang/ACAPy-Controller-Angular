export class RevokeCredential {
    constructor() {}

    updateBodyPayLoadTemplate(credExID) {
        this.bodyPayloadTemplate.cred_ex_id = credExID;
        return this;
    }

    bodyPayloadTemplate: any = {
        "cred_ex_id": "",
        "publish": true
    }
}