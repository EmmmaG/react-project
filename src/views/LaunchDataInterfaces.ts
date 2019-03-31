/* eslint-disable camelcase */
export interface Launch {
    cap_serial: string
    core_serial: string
    details: string
    flight_number: number
    land_success: boolean
    landing_type: string
    landing_vehicle: string
    launch_date_local: string
    launch_site: {
        site_id: string
        site_name: string
    }
    launch_success: boolean
    links: {
        article_link?: string
        mission_patch?: string
        presskit?: string
        reddit_campaign?: string
        reddit_launch?: string
        reddit_media?: string
        reddit_recovery?: string
        video_link?: string
    }
    payloads: {
        customers: string[]
        orbit: string
        payload_id: string
        payload_mass_kg: number
        payload_mass_lbs: number
        payload_type: string
    }[]
    rocket: {
        rocket_id: string
        rocket_name: string
        rocket_type: string
    }
    telemetry: {
        flight_club: string
    }
}

export interface Launchpad {
    details: string
    full_name: string
    id: string
    location: {
        latitude: number
        longitude: number
        name: string
        region: string
    }
    status: string
    vehicles_launched: string
}
/* eslint-enable camelcase */
