import { faker } from '@faker-js/faker'
import { errorResponse, successResponse, throwUncaughtError } from '../../utils'

export default async function signUp(credentials) {
    if (typeof credentials === 'object') {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            isMarketing,
        } = credentials

        // use faker.js to generate address and phone number;

        const phoneNumber = `(${faker.phone.phoneNumberFormat().replace(/-/, ') ')}`

        const address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`

        try {
            const res = await this.$axios.$post('user/create', {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                password_confirmation: confirmPassword,
                address,
                phone_number: phoneNumber,
                is_marketing: isMarketing ? 'is_marketing' : null,
            })

            return successResponse(res)
        } catch (err) {
            return errorResponse(err)
        }
    } else {
        return throwUncaughtError.call(this)
    }
}