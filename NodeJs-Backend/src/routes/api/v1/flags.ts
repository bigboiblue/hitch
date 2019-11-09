import { Router } from "express";
import { flags } from "./db_models/flag";
const router = Router();


/** URL Format: /flags?<groupName>=x&filter=y&limit=z */
router.get("/", async (request, response, next) => {
    response.type("application/json");

    let { group, limit } = request.query;

    if (!group) {
        next();
        return;
    }

    const distinctGroups: string[] = await flags.distinct("groupName");
    if (!distinctGroups.includes(group)) {
        response.send({ error: { isError: true, message: `Group: "${group}" does not exist...` } });
    } else {
        const result = await flags.find({ groupName: group }).limit(limit);
        response.send(result);
    }

    response.end();
});

router.put("/:id", async (request, response) => {
    await flags.updateOne({ _id: request.params.id },
        { $set: request.body });
    response.type("application.json");
    response.end("");
});


export default router;
