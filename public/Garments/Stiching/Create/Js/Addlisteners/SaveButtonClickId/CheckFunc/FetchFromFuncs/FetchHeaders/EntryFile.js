import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalQrCode = jFLocalQrCode();
    let jVarLocalSRRef = jFLocalSRRefId();

    KeysJson.body.FilterCondition = `e.pk==='${jVarLocalQrCode}' && e.BillPk==='${jVarLocalSRRef}'`;
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalSRRefId = () => {
    let jVarLocalSRRefId = 'SRRefId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSRRefId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalQrCode = () => {
    let jVarLocalQrCode = 'QrCode'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQrCode);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }