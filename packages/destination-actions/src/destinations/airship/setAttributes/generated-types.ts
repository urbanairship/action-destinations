// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * The identifier assigned in Airship as the Named User
   */
  user?: string
  /**
   * When the Trait was set
   */
  occurred: string | number
  /**
   * User Identify Traits
   */
  traits?: {
    [k: string]: unknown
  }
}