interface Config {
    readonly endpoint:string;
    readonly apikey:string;
}

const config:Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apikey: 'abcdef123456',
}

// config.apikey = "newKey" //Cannot assign to 'apikey' because it is a read-only property.