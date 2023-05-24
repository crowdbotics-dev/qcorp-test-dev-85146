import axios from "axios"
const qcorptestdevAPI = axios.create({
  baseURL: "https://qcorp-test-dev-85146.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_home_list(payload) {
  return qcorptestdevAPI.get(`/api/v1/home/`)
}
function api_v1_home_create(payload) {
  return qcorptestdevAPI.post(`/api/v1/home/`, payload.data)
}
function api_v1_login_create(payload) {
  return qcorptestdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return qcorptestdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return qcorptestdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return qcorptestdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return qcorptestdevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return qcorptestdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return qcorptestdevAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_home_retrieve(payload) {
  return qcorptestdevAPI.get(`/api/v1/home/${payload.id}/`)
}
function api_v1_home_update(payload) {
  return qcorptestdevAPI.put(`/api/v1/home/${payload.id}/`, payload.data)
}
function api_v1_home_partial_update(payload) {
  return qcorptestdevAPI.patch(`/api/v1/home/${payload.id}/`, payload.data)
}
function api_v1_home_destroy(payload) {
  return qcorptestdevAPI.delete(`/api/v1/home/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return qcorptestdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return qcorptestdevAPI.post(`/rest-auth/logout/`)
}
function api_v1_demofields_list(payload) {
  return qcorptestdevAPI.get(`/api/v1/demofields/`)
}
function api_v1_demofields_create(payload) {
  return qcorptestdevAPI.post(`/api/v1/demofields/`, payload.data)
}
function api_v1_employment_list(payload) {
  return qcorptestdevAPI.get(`/api/v1/employment/`)
}
function api_v1_employment_create(payload) {
  return qcorptestdevAPI.post(`/api/v1/employment/`, payload.data)
}
function api_v1_demofields_retrieve(payload) {
  return qcorptestdevAPI.get(`/api/v1/demofields/${payload.id}/`)
}
function api_v1_demofields_update(payload) {
  return qcorptestdevAPI.put(`/api/v1/demofields/${payload.id}/`, payload.data)
}
function api_v1_demofields_partial_update(payload) {
  return qcorptestdevAPI.patch(
    `/api/v1/demofields/${payload.id}/`,
    payload.data
  )
}
function api_v1_demofields_destroy(payload) {
  return qcorptestdevAPI.delete(`/api/v1/demofields/${payload.id}/`)
}
function api_v1_employment_retrieve(payload) {
  return qcorptestdevAPI.get(`/api/v1/employment/${payload.id}/`)
}
function api_v1_employment_update(payload) {
  return qcorptestdevAPI.put(`/api/v1/employment/${payload.id}/`, payload.data)
}
function api_v1_employment_partial_update(payload) {
  return qcorptestdevAPI.patch(
    `/api/v1/employment/${payload.id}/`,
    payload.data
  )
}
function api_v1_employment_destroy(payload) {
  return qcorptestdevAPI.delete(`/api/v1/employment/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return qcorptestdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return qcorptestdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return qcorptestdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return qcorptestdevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return qcorptestdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_home_list,
  api_v1_home_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_home_retrieve,
  api_v1_home_update,
  api_v1_home_partial_update,
  api_v1_home_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_demofields_list,
  api_v1_demofields_create,
  api_v1_employment_list,
  api_v1_employment_create,
  api_v1_demofields_retrieve,
  api_v1_demofields_update,
  api_v1_demofields_partial_update,
  api_v1_demofields_destroy,
  api_v1_employment_retrieve,
  api_v1_employment_update,
  api_v1_employment_partial_update,
  api_v1_employment_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
