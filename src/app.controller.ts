import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    constructor() {}

    @Get()
    getHello(): string {
        return `
<!DOCTYPE html>
<head>
    <title>Hello, world!</title>
</head>
<body>
    <center>
        <h1>Hello, world!</h1>
        <p>This is a project to test basic knowledge of Node.js and PostgreSQL.</p>
    </center>
</body>
`;
    }
}
