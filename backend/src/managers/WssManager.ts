import { WebSocketServer } from "ws";

export class WssManager {

    private static wss: WebSocketServer;

    public static getWss() {
        if (!this.wss) {
            this.wss = new WebSocketServer({ port: 8080 });
        }
        return this.wss;
    }
}