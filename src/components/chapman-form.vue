<template>
    <div>
        <div class="columns">
            <h1>Sign up for our Mailing List!</h1>
            <br />
            <!-- uncomment below lines for dynamic list of submitted emails -->
            <!-- <ul>
            <li v-for="email in emails" v-bind:key="email">
                <span>{{ email }}</span>
            </li>
        </ul> -->

            <div class="editor">
                <input
                    class="form-control"
                    placeholder="Enter Email Here"
                    @keyup.enter="updateEmail()"
                    v-model="input"
                />
                <button class="btn btn-primary" @click="updateEmail()">
                    Update
                </button>
                <div id="loader"></div>
                <div id="winning">
                    <strong>Email Successly Submited</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: this.$store.state.email,
        };
    },
    computed: {
        emails() {
            return this.$store.state.email;
        },
    },
    methods: {
        checkForm: function(e) {
            e.preventDefault();

            console.log(event.target.value);
        },
        updateEmail() {
            var button = document.querySelector('button');
            var loader = document.getElementById('loader');
            var winning = document.getElementById('winning');
            setTimeout(function() {
                loader.classList += 'visible';
                button.disabled = true;
            });
            setTimeout(function() {
                loader.classList += 'hidden';
                winning.classList += 'visible';
                loader.removeAttribute('class');
                document.querySelector('input').value = '';
            }, 1500);
            //This last set timeout is optional, if we want the user to be able to subitt multiple emails, then we might want to include this set timeout. Otherwise, we can remove it.
            setTimeout(function() {
                winning.classList += 'hidden';
                winning.removeAttribute('class');
                button.disabled = false;
            }, 5000);

            this.$store.commit('updateEmail', {
                email: this.input,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.editor {
    display: flex;
}

.columns {
    display: flex;
    flex-direction: column;
}
form {
    max-width: 620px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    margin: 25px 0 15px;
    font-size: 1.6em;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
    padding: 10px 6px;
    width: 50%;
    box-sizing: border-box;
    border: 2px solid;
    margin-left: 5px;
    font-size: 1.5em;
    color: #003366;
    height: 50px;
    border: 2px outset;
}

button {
    height: 50px;
    background-color: darkblue;
    color: white;
    font-size: 1.5em;
    border: 2px outset;
}

//LOADING ICON
body {
    background: -webkit-radial-gradient(circle, #6d8aa5, #303d49);
    background: -moz-radial-gradient(circle, #6d8aa5, #303d49);
    background: -ms-radial-gradient(circle, #6d8aa5, #303d49);
    background: -o-radial-gradient(circle, #6d8aa5, #303d49);
    background: radial-gradient(circle, #6d8aa5, #303d49);
}
#loader {
    width: 80px;
    height: 78px;

    margin-left: 15px;
    background: url(https://i.imgur.com/sJfQZdC.png?1);
    -webkit-animation: ani 1s steps(19) infinite reverse;
    -moz-animation: ani 1s steps(19) infinite reverse;
    -ms-animation: ani 1s steps(19) infinite reverse;
    -o-animation: ani 1s steps(19) infinite reverse;
    animation: ani 1s steps(19) infinite reverse;
    display: none;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    transform: translate(0, -15px);
}
#loader.hidden {
    opacity: 0;
    display: none;
}
#loader.visible {
    opacity: 1;
    display: unset;
}

@-webkit-keyframes ani {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 1482px;
    }
}
@-moz-keyframes ani {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 1482px;
    }
}
@-ms-keyframes ani {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 1482px;
    }
}
@-o-keyframes ani {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 1482px;
    }
}
@keyframes ani {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 1482px;
    }
}

#winning {
    color: green;
    font-size: 25px;
    margin-left: 15px;
    display: none;
}

h1 {
    border-bottom: 6px solid var(--color-highlight);
}
#winning.hidden {
    opacity: 0;
    display: none;
}
#winning.visible {
    opacity: 1;
    display: unset;
}
</style>
