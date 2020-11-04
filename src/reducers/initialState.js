const baseDataState = {
  data: {},
  loading: false,
  loaded: false,
  error: null
}

const initialState = {
  lessons: baseDataState,
  courses: baseDataState,
  notification_views: baseDataState,
  onboarding_steps: baseDataState
}

export default initialState;
