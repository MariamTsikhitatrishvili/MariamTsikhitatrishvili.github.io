<template>
    <header class="transparent header-light scroll-light">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="de-flex sm-pt10">
                        <div class="de-flex-col">
                            <div class="de-flex-col">
                                <!-- logo begin -->
                                <div id="logo">
                                    <a @click="test" href="#">
                                        <img alt="" class="logo" src="images/logo-light.png" />
                                        <img alt="" class="logo-2" src="images/logo.png" />
                                    </a>
                                </div>
                                <!-- logo close -->
                            </div>
                            <div class="de-flex-col">
                                <input id="quick_search" class="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                            </div>
                        </div>
                        <div class="de-flex-col header-col-mid">
                            <!-- mainmenu begin -->
                            <ul id="mainmenu">
                                <li>
                                    <a href="index.html">Home<span></span></a>
                                    <ul>
                                        <li><a href="03_grey-index.html">New: Homepage Grey</a></li>
                                        <li><a href="index.html">Homepage 1</a></li>
                                        <li><a href="index-2.html">Homepage 2</a></li>
                                        <li><a href="index-3.html">Homepage 3</a></li>
                                        <li><a href="index-4.html">Homepage 4</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="explore.html">Explore<span></span></a>
                                    <ul>
                                        <li><a href="explore.html">Explore</a></li>
                                        <li><a href="explore-2.html">Explore 2</a></li>
                                        <li><a href="collection.html">Collections</a></li>
                                        <li><a href="item-details.html">Item Details</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Pages<span></span></a>
                                    <ul>
                                        <li><a href="author.html">Author</a></li>
                                        <li><a href="wallet.html">Wallet</a></li>
                                        <li><a href="create.html">Create</a></li>
                                        <li><a href="news.html">News</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="login-2.html">Login 2</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </li>                                    
                                <li>
                                    <a href="activity.html">Activity<span></span></a>
                                </li>
                                <li>
                                    <a href="#">Elements<span></span></a>
                                    <ul>
                                        <li><a href="icons-elegant.html">Elegant Icons</a></li>
                                        <li><a href="icons-etline.html">Etline Icons</a></li>
                                        <li><a href="icons-font-awesome.html">Font Awesome Icons</a></li>
                                        <li><a href="accordion.html">Accordion</a></li> 
                                        <li><a href="alerts.html">Alerts</a></li>
                                        <li><a href="counters.html">Counters</a></li>
                                        <li><a href="modal.html">Modal</a></li>
                                        <li><a href="popover.html">Popover</a></li>
                                        <li><a href="pricing-table.html">Pricing Table</a></li>
                                        <li><a href="progress-bar.html">Progress Bar</a></li>
                                        <li><a href="tabs.html">Tabs</a></li>
                                        <li><a href="tooltips.html">Tooltips</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="menu_side_area">
                                <a v-if="!$store.state.auth.token" @click="testMetamask" class="btn-main"><i class="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                <a v-if="$store.state.auth.token" @click="logoutMetamask" class="btn-main"><i class="icon_wallet_alt"></i><span>Sign Out</span></a>
                                <small style="font-size:11px; margin-left:5px" v-if="$store.state.auth.token">{{$store.state.auth.publicAddress.substring(0, 8)}}...</small>
                                <span id="menu-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import axios from 'axios';
import {mapActions} from 'vuex';

export default {
  name: 'templateHeader',
  data() {
      return {
          displayToken: null
      }
  },
  methods : {
      ...mapActions({
          signIn: 'auth/signIn',
          login:"auth/login"
      }),
      testMetamask(){
          this.signIn();

          console.log(this.$store.publicAddress);
      },
      logoutMetamask(){
            this.$store.commit("auth/logout");
      },
      test(){
        console.log(this.$store.state.auth.token);
      }
  },
}
</script>

<style>

</style>