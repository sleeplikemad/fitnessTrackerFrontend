import axios from "axios";
import { getToken } from "../auth";

export const BASE = 'http://fitnesstrac-kr.herokuapp.com/api'

//na: logs in
export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {

      username: username,
      password: password

    });
  
    return data;
  } catch (error) {
    throw error;
  }
}

//na: gets all public routines for specified user
export async function fetchUserRoutines(username) {
  try {
    const token = getToken()
    const { data } = await axios.get(`${BASE}/users/${username}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// na: get's all activities
export async function fetchAllActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`);

    return data;
  } catch (error) {
    throw error;
  }
}

//na: registers user
export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password
    });
   
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
        name: name,
        description: description,

      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
  
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
        name: name,
        description: description
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    
    return data;
  } catch (error) {
    throw error;
  }
}

// na: gets list of public routines that use specified activity
export async function fetchRoutinesByActivity(activityId) {
  try {
    const { data } = await axios.get(`${BASE}/activities/${activityId}/routines`);
    return data;
  } catch (err) {
    console.log(err);
  }
}

// na: gets all public routines
export async function fetchAllRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);

    return data;
  } catch (err) {
    console.log(err);
  }
}

//a: returns user's ID
export async function getMyID() {
  try {
    const token = getToken();
    const { data } = await axios.get(`${BASE}/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      }
    );
    return data;
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
      `${BASE}/routines`,
      {
        name: name,
        goal: goal,
        isPublic: isPublic

      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      }
    );

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
        name: name,
        goal: goal,
        isPublic: isPublic
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

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
        }
      }
    );
   
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
      `${BASE}/routines/${routineId}/activities`,
      {
        activityId: activityId,
        count: count,
        duration: duration
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

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
        count: count,
        duration: duration
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

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
   
    return data;
  } catch (error) {
    throw error;
  }
}

