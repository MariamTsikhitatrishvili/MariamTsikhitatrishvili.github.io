import axios from 'axios'

export default ({
  namespaced: true,
  state: {
    publicAddress: '',
    token: null,
    user: null
  },
  mutations: {
    setToken (state, data) {
        state.token = data.token;
        console.log(data);
    },
    logout (state) {
        state.token = null;
        state.publicAddress = null;
    },
    setAddress (state, data) {
        state.publicAddress = data;
    }
  },
  actions: {
    async signIn({commit, dispatch}){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const publicAddress = accounts[0];
        const res = await axios.get('https://api.nftslab.io/api/v1/authenticate/' + publicAddress );
        this.nonce = res.data.nonce;
        this.publicAddress = publicAddress;
        this.commit("auth/setAddress", publicAddress);
        console.log("nonce:");
        console.log(this.nonce);
        ethereum
            .request({"method": "personal_sign", "params": [this.nonce, publicAddress]})
            .then((result) => {
                // The result varies by RPC method.
                // For example, this method will return a transaction hash hexadecimal string on success.
                // console.log(result);
                this.signature = result;
                console.log(this.signature)
                dispatch("login");
                this.login();
                
            })
            .catch((error) => {
                // If the request fails, the Promise will reject with an error.
            });  
            
        

      },
    async login({commit}) {
        // let json = JSON.stringify({ signature: this.signature })
        let params = {"signature": this.signature, "nonce": this.nonce};
        console.log('signature:');
        console.log(params);
        const resp = await axios.post('https://api.nftslab.io/api/v1/login/' + this.publicAddress, params)
        .then( (response) => {
            console.log('response:');
            console.log(response.data);
            if (response.data.token.length > 0 ){
                // this.token = response.data.token;
                // console.log(this);
                this.commit({type: "auth/setToken", token: response.data.token});
            }
        }) 
    },
  }
})
