import request from "supertest";
import app from "../src/app.js";

describe("Get /index",  ()=>{
    const response = request(app).get("/index").send();
    expect(response.statusCode).toBe(200);
})