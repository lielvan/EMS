<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped left>
      <v-list dense shaped>
        <v-list-group no-action prepend-icon="mdi-account-circle" value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item link>
            <v-list-item-title>Liel</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-inbox</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Messages</v-list-item-title>
          </v-list-item-content> 
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account-box-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Employees Manifest</v-list-item-title>
          </v-list-item-content> 
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-alert-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Rules and Regulations</v-list-item-title>
          </v-list-item-content> 
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-clipboard-account-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Human Resources</v-list-item-title>
          </v-list-item-content> 
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-file</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Additional Forms</v-list-item-title>
          </v-list-item-content> 
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Personal Settings</v-list-item-title>
          </v-list-item-content> 
        </v-list-item>
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
    }),
  }
</script>