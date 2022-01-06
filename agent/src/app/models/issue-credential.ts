export class IssueCredential {
    constructor() {}

    updateBodyPayLoadTemplate(comment) {
        this.bodyPayloadTemplate.comment = comment;
        return this;
    }
    bodyPayloadTemplate: any = {
        "comment": ""
    }

}