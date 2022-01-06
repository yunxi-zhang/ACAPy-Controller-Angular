export class NewDefinitions {
    constructor() {}

    updateBodyPayLoadTemplate(schemaID, supportRevocation, revocationRegistrySize, tag) {
        this.bodyPayloadTemplate.schema_id = schemaID;
        this.bodyPayloadTemplate.support_revocation = (supportRevocation === "true");
        this.bodyPayloadTemplate.revocation_registry_size = parseInt(revocationRegistrySize);
        this.bodyPayloadTemplate.tag = tag;
        return this;
    }

    bodyPayloadTemplate: any = {
        "schema_id": "",
        "support_revocation": "",
        "revocation_registry_size": "",
        "tag": ""
    }
}