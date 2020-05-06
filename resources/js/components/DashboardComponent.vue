<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped left>
      <v-list dense shaped>
        <template v-for="(item, index) in navigationItems">
          <v-list-group v-if="item.childItems != null" :key="index" no-action :prepend-icon="item.icon">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="childItem in item.childItems" :key="childItem.text" @click="testValue = childItem.text" link>
              <v-list-item-title v-text="childItem.text"></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="childItem.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else :key="index" @click="testValue = item.text" link>
            <v-list-item-action>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content> 
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="blue-grey" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Menu</v-toolbar-title>
      <v-spacer />
      <v-toolbar-title>LvdH Employee Managment System</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
          <v-col class="shrink">
            {{ testValue }}
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app color="blue-grey" class="white--text">
      <span>{{ user.name }}</span>
      <v-spacer />
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      user: Object,
    },
    data: () => ({
      drawer: null,
      testValue: 'TEST',
      navigationItems: [
        { 
          text: 'Admin', 
          icon: 'mdi-account-circle', 
          isLink: false, 
          childItems: [
            { text: 'Liel', icon: 'mdi-account', isLink: true, },
          ],
        },
        { 
          text: 'Messages',
          icon: 'mdi-mail',
          isLink: false,
          childItems: [
            { text: 'Inbox', icon: 'mdi-inbox', isLink: true, },
            { text: 'Sent', icon: 'mdi-send', isLink: true, },
            { text: 'New Message', icon: 'mdi-plus-box', isLink: true, },
          ],
        },
        { text: 'Employees Manifest', icon: 'mdi-account-box-multiple', isLink: true, parentItem: null, },
        { text: 'Rules and Regulations', icon: 'mdi-alert-circle', isLink: true, parentItem: null, },
        { 
          text: 'Human Resources',
          icon: 'mdi-clipboard-account-outline',
          isLink: false,
          childItems:[
            { text: 'Contact Manager', icon: '', isLink: true, },
            { text: 'Request Time Off', icon: '', isLink: true, },
            { text: 'Electronic Paycheck', icon: '', isLink: true, },
            { text: 'Forms', icon: '', isLink: true, },
          ],
        },
        { text: 'Additional Forms', icon: 'mdi-file', isLink: true, parentItem: null, },
        { text: 'Personal Settings', icon: 'mdi-account-cog', isLink: true, },
      ]
    }),
  }
</script>