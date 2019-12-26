import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import page1 from "@/components/page1";
import page2 from "@/components/page2";
import page3 from "@/components/page3";
import page4 from "@/components/page4";
import user from "@/components/user";
import UserHome from "@/components/userhome";
import UserProfile from "@/components/userprofile";
import UserPost from "@/components/userpost";
import NoticeLists from "@/components/noticelists";
import addNotice from "@/components/sampleform";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      props: { text: "Welcome Home !" }
    },
    {
      path: "/page1",
      name: "page1",
      component: page1,
      props: { text1: "This is first page !" }
    },
    {
      path: "/page2",
      name: "page2",
      component: page2,
      props: true
    },
    {
      path: "/page3",
      name: "page3",
      component: page3,
      props: true
    },

    {
      path: "/page4",
      name: "",
      component: page4,
      props: true,
      children: [
        {
          name: "noticelists",
          path: "",
          component: NoticeLists,
          meta: { title: "お知らせ一覧" },
          props: true
        },
        {
          name: "addnotice",
          path: "/noticelist",
          component: addNotice,
          meta: { title: "お知らせ新規登録" },
          props: true
        }
      ]
    },
    {
      path: "/user/:userName/:userID",
      name: "",
      component: user,
      props: true,
      children: [
        { name: "Userhome", path: "", component: UserHome, props: true },
        { name: "userprofile", path: "profile", component: UserProfile },
        {
          name: "userposts",
          path: "posts/:postID",
          component: UserPost,
          props: true
        }
      ]
    }
  ]
});
