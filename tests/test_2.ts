enum Status {
    PUBLISHED = "published",
    DRAFT = "draft",
    DELETED = "deleted",
}

type Res = {
    "question": string,
    "answer": string,
    "tags": [],
    "likes": number,
    "status"?: Status
}

type Faq = {
    "topicId": number,
    "status": Status
}

const reqData: Faq = {
    "topicId": 5,
    "status": Status.PUBLISHED
}


async function getFaqs(req: Faq): Promise<Res> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    return await res.json();
}

const result = getFaqs(reqData)

