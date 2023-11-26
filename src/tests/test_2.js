"use strict";
var Status;
(function (Status) {
    Status["PUBLISHED"] = "published";
    Status["DRAFT"] = "draft";
    Status["DELETED"] = "deleted";
})(Status || (Status = {}));
const reqData = {
    "topicId": 5,
    "status": Status.PUBLISHED
};
async function getFaqs(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    return await res.json();
}
const result = getFaqs(reqData);
