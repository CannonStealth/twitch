import { assert } from "chai";
import * as Twitch from "../src";
import { TEST_TYPES } from "./shared.test";

describe(`${TEST_TYPES.CLASS} Client`, () => {
    const client = new Twitch.Client({
        clientId: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!,
        scope: [],
    });

    before(async () => {
        await client.login();
    });

    it("can log in", async () => {
        await client.login();

        // @ts-ignore
        assert(typeof client.accessToken === "string", "client has an access token");
    });

    it("can validate its access token", async () => {
        // @ts-ignore
        await client.validate();
    });

    it("emits debug messages", async () => {
        client.on("debug", console.log);
    });

    it("can get destroyed", async () => {
        await client.destroy();
    });
});
