export class NewSchemas {
    constructor() {}

    updateBodyPayLoadTemplate(attributes: string[], schemaName, schemaVersion) {
        this.bodyPayloadTemplate.attributes = Array.from(attributes);
        this.bodyPayloadTemplate.schema_name = schemaName;
        this.bodyPayloadTemplate.schema_version = schemaVersion;
        return this;
    }

    bodyPayloadTemplate: any = {
        "attributes": [],
        "schema_name": "",
        "schema_version": ""
    }
}