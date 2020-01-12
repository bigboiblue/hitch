import { Router } from "express";
import { flags } from "./db_models/flag";

const router = Router();

router.get("/", async (request, response, next) => {
    const distinctGroups: string[] = await flags.distinct("groupName");

    response.type("application/json");
    response.send(distinctGroups);

    response.end();
});

export default router;
