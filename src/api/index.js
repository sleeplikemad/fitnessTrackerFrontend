import axios from "axios";
import { getToken } from "../auth";

/**
 * This file features and exports all of your calls to the API
 * 
 * You need to replace YOUR_API_KEY in the string associated with KEY with your actual API key
 */
export const BASE = 'http://fitnesstrac-kr.herokuapp.com/api/'

// this is an example for an api call with axios

//na: logs in
export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username: username,
        password: password,
      },
    });
    console.log("login: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

//na: gets all public routines for specified user
export async function fetchUserRoutines(username) {
  try {
    const token = getToken()
    const { data } = await axios.get(`${BASE}/users/${username}/routines`);
    console.log("fetchUserRoutines: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

// na: get's all activities
export async function fetchAllActivities() {
  try {
    const token = getToken()
    const { data } = await axios.get(`${BASE}/activities`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log("fetchAllActivities: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

//na: registers user
export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username: username,
        password: password,
      },
    });
    console.log("registerUser: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

// a: adds activity
export async function addActivities(
  name,
  description
) {
  try {
    const token = getToken();
    const { data } = await axios.post(
      `${BASE}/activities`,
      {
        activity: {
          name: name,
          description: description,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    console.log("addActivities: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}



// a: updates activity
export async function updateActivity(
  name,
  description, 
  activityId
) {
  try {
    const token = getToken();
    const { data } = await axios.patch(
      `${BASE}/activities/${activityId}`,
      {
        activity: {
          name: name,
          description: description
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    console.log("updateActivity: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

// na: gets list of public routines that use specified activity
export async function fetchRoutinesByActivity(activityId) {
  try {
    const response = await axios.get(`${BASE}/activities/${activityId}/routines`);
    const data = response.data;
    console.log("fetchRoutinesByActivity: ", data)

    return data;
  } catch (err) {
    console.log(err);
  }
}

// na: gets all public routines
export async function fetchAllRoutines() {
  try {
    const token = getToken();
    const response = await axios.get(`${BASE}/routines`);
    const data = response.data;
    console.log("fetchAllRoutines: ", data)
    return data;
  } catch (err) {
    console.log(err);
  }
}

//a: returns user's ID
export async function getMyID() {
  try {
    const token = getToken();
    const {data} = await axios.get(`${BASE}/users/me`);
  } catch (error) {
    throw error;
  }
}

// a: creates a new routine
export async function addRoutine(
  name, 
  goal,
  isPublic
  ) {
  try {
    const token = getToken();
    const { data } = await axios.post(
      `${BASE}/routines}`,
      {
        routine: {
          name: name,
          goal: goal,
          isPublic: isPublic
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    
    console.log("addRoutine: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

// a: updates a routine
export async function updateRoutine(
  routineId,
  name, 
  goal,
  isPublic
  ) {
  try {
    const token = getToken();
    const { data } = await axios.patch(
      `${BASE}/routines/${routineId}`,
      {
        routine: {
          name: name,
          goal: goal,
          isPublic: isPublic
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    
    console.log("updateRoutine: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

//a: deletes a specified routine
export async function deleteRoutine(
  routineId
) {
  try {
    const token = getToken();
    const { data } = await axios.delete(
      `${BASE}/routines/${routineId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    console.log("deleteRoutine: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

// a: adds a specific activity to a specific routine
export async function addActivityToRoutine(
  routineId, 
  activityId,
  count,
  duration
  ) {
  try {
    const token = getToken();
    const { data } = await axios.post(
      `${BASE}/routines/${routineId}/activities}`,
      {
        routine_activity: {
          activityId: activityId,
          count: count,
          duration: duration
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    
    console.log("addActivityToRoutine: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

// a: updates a routineActivity.  unfinished, needs to check if user owns RA
export async function updateRoutineActivity(
  routineActivityId,
  count, 
  duration
  ) {
  try {
    const token = getToken();
    const { data } = await axios.patch(
      `${BASE}/routine_activities/${routineActivityId}`,
      {
        routineActivity: {
          count: count,
          duration: duration
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    
    console.log("updateRoutineActivity: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}

//a: deletes a specified routineActivity
export async function deleteRoutineActivity(
  routineActivityId
) {
  try {
    const token = getToken();
    const { data } = await axios.delete(
      `${BASE}/routine_activities/${routineActivityId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    console.log("deleteRoutineActivity: ", data)
    return data;
  } catch (error) {
    throw error;
  }
}