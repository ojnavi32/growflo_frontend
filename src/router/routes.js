function page(path) {
  return () => import(`./../views/${path}`).then((m) => m.default || m);
}

const routes = [
  {
    path: "/",
    component: page("index"),
  },
  {
    path: "/:id/edit",
    component: page("edit"),
  },
  {
    path: "/create",
    component: page("create"),
  },
];

export default routes;
