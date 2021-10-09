import axios from "axios";
import { SingupFormType } from "../types";

const USER_API_URL = "https://localhost:5000";

export default class UserService {
  public static async signup({ id, password, username }: SingupFormType) {}
}
