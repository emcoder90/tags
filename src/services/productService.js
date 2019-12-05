import axios from "axios";
import * as helpers from "./serviceHelper";

const apiPrefix = "http://localhost:50000/api/product";

let getProducts = () => {
  const config = {
    method: "GET",
    url: `${apiPrefix}`,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

let getById = id => {
  const config = {
    method: "GET",
    url: `${apiPrefix}/${id}`,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const search = (pageIndex, pageSize, q) => {
  const config = {
    method: "GET",
    url: `${apiPrefix}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${q}`,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

let getByType = (pageIndex, pageSize, id) => {
  const config = {
    method: "GET",
    url: `${apiPrefix}/type?pageIndex=${pageIndex}&pageSize=${pageSize}&id=${id}`,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

let create = model => {
  const config = {
    method: "POST",
    url: `${apiPrefix}`,
    data: model,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const update = model => {
  const config = {
    method: "PUT",
    url: `${apiPrefix}/${model.id}`,
    data: model,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const deleteById = id => {
  const config = {
    method: "DELETE",
    url: `${apiPrefix}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .then(() => id)
    .catch(helpers.onGlobalError);
};

let sendEmail = model => {
  const config = {
    method: "POST",
    url: `${apiPrefix}/email`,
    data: model,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

let ahScrapeIt = () => {
  const config = {
    method: "GET",
    url: `${apiPrefix}/scrape`,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export {
  getProducts,
  getById,
  search,
  getByType,
  create,
  update,
  deleteById,
  sendEmail,
  ahScrapeIt
};
