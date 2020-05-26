import Appointments from '../API/Appointments';

export const createAppointment = (formValues) => async (dispatch) => {
    const response = await Appointments.post('/appointments', formValues);

    dispatch({
        type: 'CREATE_APPOINTMENT', 
        payload: response
    })
};