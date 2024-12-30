//used for type narrowing

interface User{
    name: string,
    email: string,
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean,
}

function checkAdmin(account: User | Admin){
    //type narrowing using in operator
    if("isAdmin" in account){
        console.log(`Admin account`);
        return;
    }
}