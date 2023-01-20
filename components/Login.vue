<template>
  <body class="body">
        <div class="wrapper align-center-item">
            <div class="row">
                <div class="column">
                    <p style="padding-top:80px; text-align:center; font-weight:800;  font-size: 20px; color:white; text-shadow: 5px 5px 5px black;">WELCOME TO</p>
                    <img class="logo" src="@/assets/CTULogo.png"  />

                    <p style="margin-top:30px; text-align:center; font-weight:800; font-size:25px; color:yellow; text-shadow: 5px 5px 5px black; ; ">CEBU TECHNOLOGICAL UNIVERSITY</p>
                    <p style="margin-top:-25px; text-align:center; font-weight:800; font-size:25px; color:yellow; text-shadow: 5px 5px 5px black; ">MAIN CAMPUS</p>
                    <p style="margin-top:-25px; text-align:center; font-weight:800;  font-size: 17px; color:white; text-shadow: 5px 5px 5px black;">PORTAL ENROLLMENT SYSTEM</p>
                    <p style="margin-top:50px; text-align:center; font-weight:800; font-size:25px; color:yellow; text-shadow: 5px 5px 5px black; ">SIGN IN</p>
                    <p style="margin-top:-25px; text-align:center; font-weight:800;  font-size: 17px; color:white; text-shadow: 5px 5px 5px black;">TO CONTINUE TO CTU MAIN CAMPUS - PES</p>
                </div>

                <div class="column">
                    <div class="content">
                        <div style="margin:25px 40px;">
                            <button style="float:right; margin-top:-10px;font-size:12pt; font-weight:800; background-color:#010424; color:white; border: 2px solid #010424; padding:5px; cursor:pointer ">REGISTER</button>
                            <p style="float:right; margin-top:-10px; font-size:12pt; font-weight:800; background-color:white; color:#010424; border: 2px solid #010424; padding:5px; ">SIGN IN</p>

                            <table>
                                <tr>
                                    <td style="font-weight:bold; font-size:40pt; color:#010424; padding-top:50px;">Sign In</td>
                                </tr>
                            </table>

                            <table>
                                <tr>
                                    <td style="padding-top:30px;margin-left:10px; font-size:15pt;">Email</td>
                                </tr>
                                <tr>
                                    <td><input placeholder="Email Address" class="act" type="email" v-model="Email" id="Email"/></td>
                                </tr>
                                <tr>
                                    <td style="padding-top:10px;margin-left:10px; font-size:15pt;">Password</td>
                                </tr>
                                <tr>
                                    <td><input placeholder="Password" class="act" type="password" v-model="Password" id="Password"/></td>
                                </tr>

                                <tr>
                                  <NuxtLink to="/dashboard" class="nav-link">
                                    <td><button class="button" type="submit" id="Login" >CONTINUE</button></td>
                                  </NuxtLink>
                                </tr>
                            </table>

                            <i class="fa fa-long-arrow-right" style="margin-top:-40px; margin-left:420px;overflow:hidden; position:absolute; font-size:25px; color:white;"></i>

                            <table>
                                <tr>
                                    <td style="font-size:10px; padding-top:20px;padding-left:20px;">Tel. 402-4060 |Corner M.J. Cuenco Ave. & R. Palma St., Cebu City, Philippines, 6000</td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style>
.body{
    background-image: url("@/assets/bg5.png");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size:cover;
  }
</style>
