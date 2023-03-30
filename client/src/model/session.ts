import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "./myfetch";

const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "succsess" | "error" | "warning" | "info",
    }[],
})

interface User {
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;
}

export function api(url: string) {
    session.isLoading = true;
     return myFetch.api(url)
        .catch(err => {
            console.error(err);
            session.messages.push({
                msg: err.message ?? JSON.stringify(err),
                type: "error",
            })
        })
        .finally(() => {
            session.isLoading = false;
        })
}

export function useSession() {
    return session;
}

export function login() {
    session.user = {
        name: "John Doe",
    }
}

export function useLogout() {
    const router = useRouter();

    return function() {
        console.log({router});
        console.log(useSession())
        session.user = null;

        router.push("/login");
    }
}