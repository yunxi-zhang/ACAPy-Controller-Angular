export class SendPresentation {
    constructor() {}

    updateBodyPayLoadTemplate(attributesObject, predicatesObject) {
        this.bodyPayloadTemplate.requested_attributes = attributesObject;
        this.bodyPayloadTemplate.requested_predicates = predicatesObject;
        return this;
    }

    bodyPayloadTemplate: any = {
        "requested_attributes": {},
        "requested_predicates": {},
        "self_attested_attributes": {},
        "trace": false
    }
}