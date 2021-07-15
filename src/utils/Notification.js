import { toast } from "react-toastify";

const Notification = (message, type) => !!message && toast[type](message);

export default Notification;
