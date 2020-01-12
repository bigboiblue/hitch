import { Router } from "express";
import { flags } from "./db_models/flag";
const router = Router();

// TODO: IMPORTANT Make server and frontent request code PRISTINE. Each and every project you make is going to rely on this sould project.

/** URL Format: /flags?<groupName>=x&filter=y&limit=z */
router.get("/", async (request, response, next) => {
    response.type("application/json");

    let { groupName, isArchived, limit } = request.query;

    isArchived = (isArchived === "true");

    if (!groupName) {
        next();
        return;
    }

    const distinctGroups: string[] = await flags.distinct("groupName");
    if (!distinctGroups.includes(groupName)) {
        response.send({ error: { isError: true, message: `Group: "${groupName}" does not exist...` } });
    } else {
        const result = await flags.find({ groupName, isArchived }).limit(limit);
        response.send(result);
    }

    response.end();
});

router.put("/:id", async (request, response) => {
    await flags.updateOne({ _id: request.params.id },
        { $set: request.body });
    response.type("application/json");
    response.end("");
});

router.put("/archive/:id", async (request, response) => {
    response.type("application/json");
    //If going to be archived, then set date, else dont (and remove date)
    if (request.body.isArchived) {
        await flags.updateOne({ _id: request.params.id },
            { $set: { ...request.body, dateArchived: new Date() } });
    } else {
        await flags.updateOne({ _id: request.params.id },
            { $set: request.body, $unset: { dateArchived: "" } });
    }

    response.end("");
});


router.delete("/:id", async (request, response) => {
    response.type("application/json");
    await flags.deleteOne({ _id: request.params.id });
    response.end("");
});

router.post("/add", async (request, response) => {
    response.type("application/json");
    await flags.insertMany(request.body);
    response.end("");
});


export default router;
