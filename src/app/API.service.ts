/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateClubdb: OnCreateClubdbSubscription;
  onUpdateClubdb: OnUpdateClubdbSubscription;
  onDeleteClubdb: OnDeleteClubdbSubscription;
  onCreateCoachdb: OnCreateCoachdbSubscription;
  onUpdateCoachdb: OnUpdateCoachdbSubscription;
  onDeleteCoachdb: OnDeleteCoachdbSubscription;
  onCreateTeamdb: OnCreateTeamdbSubscription;
  onUpdateTeamdb: OnUpdateTeamdbSubscription;
  onDeleteTeamdb: OnDeleteTeamdbSubscription;
  onCreatePlayerdb: OnCreatePlayerdbSubscription;
  onUpdatePlayerdb: OnUpdatePlayerdbSubscription;
  onDeletePlayerdb: OnDeletePlayerdbSubscription;
  onCreateMedicsdb: OnCreateMedicsdbSubscription;
  onUpdateMedicsdb: OnUpdateMedicsdbSubscription;
  onDeleteMedicsdb: OnDeleteMedicsdbSubscription;
  onCreateDnadb: OnCreateDnadbSubscription;
  onUpdateDnadb: OnUpdateDnadbSubscription;
  onDeleteDnadb: OnDeleteDnadbSubscription;
  onCreateStaffsdb: OnCreateStaffsdbSubscription;
  onUpdateStaffsdb: OnUpdateStaffsdbSubscription;
  onDeleteStaffsdb: OnDeleteStaffsdbSubscription;
  onCreateTrainingdb: OnCreateTrainingdbSubscription;
  onUpdateTrainingdb: OnUpdateTrainingdbSubscription;
  onDeleteTrainingdb: OnDeleteTrainingdbSubscription;
};

export type CreateClubdbInput = {
  id?: string | null;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
};

export type ModelClubdbConditionInput = {
  club_name?: ModelStringInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  stadium_name?: ModelStringInput | null;
  stadium_address?: ModelStringInput | null;
  field_name1?: ModelStringInput | null;
  field_name2?: ModelStringInput | null;
  field_name3?: ModelStringInput | null;
  field_address1?: ModelStringInput | null;
  field_address2?: ModelStringInput | null;
  field_address3?: ModelStringInput | null;
  fitness_name?: ModelStringInput | null;
  fitness_address?: ModelStringInput | null;
  club_access?: ModelBooleanInput | null;
  and?: Array<ModelClubdbConditionInput | null> | null;
  or?: Array<ModelClubdbConditionInput | null> | null;
  not?: ModelClubdbConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type clubdb = {
  __typename: "clubdb";
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClubdbInput = {
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
};

export type DeleteClubdbInput = {
  id: string;
};

export type CreateCoachdbInput = {
  id?: string | null;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
};

export type ModelCoachdbConditionInput = {
  logo?: ModelStringInput | null;
  coach_name?: ModelStringInput | null;
  team_name?: ModelStringInput | null;
  team_id?: ModelStringInput | null;
  email?: ModelStringInput | null;
  user_name?: ModelStringInput | null;
  password?: ModelStringInput | null;
  and?: Array<ModelCoachdbConditionInput | null> | null;
  or?: Array<ModelCoachdbConditionInput | null> | null;
  not?: ModelCoachdbConditionInput | null;
};

export type coachdb = {
  __typename: "coachdb";
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCoachdbInput = {
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
};

export type DeleteCoachdbInput = {
  id: string;
};

export type CreateTeamdbInput = {
  id?: string | null;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
};

export type ModelTeamdbConditionInput = {
  club_id?: ModelStringInput | null;
  team_name?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  and?: Array<ModelTeamdbConditionInput | null> | null;
  or?: Array<ModelTeamdbConditionInput | null> | null;
  not?: ModelTeamdbConditionInput | null;
};

export type teamdb = {
  __typename: "teamdb";
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTeamdbInput = {
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
};

export type DeleteTeamdbInput = {
  id: string;
};

export type CreatePlayerdbInput = {
  id?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
};

export type ModelPlayerdbConditionInput = {
  team_id?: ModelStringInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  user_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  image?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  address?: ModelStringInput | null;
  height?: ModelStringInput | null;
  weight?: ModelStringInput | null;
  nationality?: ModelStringInput | null;
  birthplace?: ModelStringInput | null;
  languages?: ModelStringInput | null;
  urgent_contact?: ModelStringInput | null;
  preferred_foot?: ModelStringInput | null;
  shirt_number?: ModelStringInput | null;
  previous_club?: ModelStringInput | null;
  license_number?: ModelStringInput | null;
  transferred_players?: ModelStringInput | null;
  first_license?: ModelStringInput | null;
  national_team?: ModelStringInput | null;
  positions?: ModelStringInput | null;
  contract_length?: ModelStringInput | null;
  teamwallet_admin?: ModelStringInput | null;
  mobile_number?: ModelStringInput | null;
  pain?: ModelStringInput | null;
  intensive?: ModelStringInput | null;
  feel_after_training?: ModelStringInput | null;
  cool_after_training?: ModelStringInput | null;
  hours_of_sleep?: ModelStringInput | null;
  stressful?: ModelStringInput | null;
  and?: Array<ModelPlayerdbConditionInput | null> | null;
  or?: Array<ModelPlayerdbConditionInput | null> | null;
  not?: ModelPlayerdbConditionInput | null;
};

export type playerdb = {
  __typename: "playerdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePlayerdbInput = {
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
};

export type DeletePlayerdbInput = {
  id: string;
};

export type CreateMedicsdbInput = {
  id?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
};

export type ModelMedicsdbConditionInput = {
  team_name?: ModelStringInput | null;
  team_id?: ModelStringInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  user_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  and?: Array<ModelMedicsdbConditionInput | null> | null;
  or?: Array<ModelMedicsdbConditionInput | null> | null;
  not?: ModelMedicsdbConditionInput | null;
};

export type medicsdb = {
  __typename: "medicsdb";
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMedicsdbInput = {
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
};

export type DeleteMedicsdbInput = {
  id: string;
};

export type CreateDnadbInput = {
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id?: string | null;
};

export type ModelDnadbConditionInput = {
  league_name?: ModelStringInput | null;
  cup_name_1?: ModelStringInput | null;
  cup_name_2?: ModelStringInput | null;
  jersy_color?: ModelStringInput | null;
  shorts_color?: ModelStringInput | null;
  socks_color?: ModelStringInput | null;
  player_home?: ModelStringInput | null;
  player_away?: ModelStringInput | null;
  player_third?: ModelStringInput | null;
  goalkeeper_home?: ModelStringInput | null;
  goalkeeper_away?: ModelStringInput | null;
  goalkeeper_third?: ModelStringInput | null;
  team_id?: ModelStringInput | null;
  and?: Array<ModelDnadbConditionInput | null> | null;
  or?: Array<ModelDnadbConditionInput | null> | null;
  not?: ModelDnadbConditionInput | null;
};

export type dnadb = {
  __typename: "dnadb";
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDnadbInput = {
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
};

export type DeleteDnadbInput = {
  id: string;
};

export type CreateStaffsdbInput = {
  id?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
};

export type ModelStaffsdbConditionInput = {
  team_id?: ModelStringInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  user_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  and?: Array<ModelStaffsdbConditionInput | null> | null;
  or?: Array<ModelStaffsdbConditionInput | null> | null;
  not?: ModelStaffsdbConditionInput | null;
};

export type staffsdb = {
  __typename: "staffsdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStaffsdbInput = {
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
};

export type DeleteStaffsdbInput = {
  id: string;
};

export type CreateTrainingdbInput = {
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type trainingdb = {
  __typename: "trainingdb";
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type UpdateTrainingdbInput = {
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player?: Array<string | null> | null;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type DeleteTrainingdbInput = {
  id: string;
};

export type ModelClubdbFilterInput = {
  id?: ModelIDInput | null;
  club_name?: ModelStringInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  stadium_name?: ModelStringInput | null;
  stadium_address?: ModelStringInput | null;
  field_name1?: ModelStringInput | null;
  field_name2?: ModelStringInput | null;
  field_name3?: ModelStringInput | null;
  field_address1?: ModelStringInput | null;
  field_address2?: ModelStringInput | null;
  field_address3?: ModelStringInput | null;
  fitness_name?: ModelStringInput | null;
  fitness_address?: ModelStringInput | null;
  club_access?: ModelBooleanInput | null;
  and?: Array<ModelClubdbFilterInput | null> | null;
  or?: Array<ModelClubdbFilterInput | null> | null;
  not?: ModelClubdbFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelClubdbConnection = {
  __typename: "ModelClubdbConnection";
  items: Array<clubdb | null>;
  nextToken?: string | null;
};

export type ModelCoachdbFilterInput = {
  id?: ModelIDInput | null;
  logo?: ModelStringInput | null;
  coach_name?: ModelStringInput | null;
  team_name?: ModelStringInput | null;
  team_id?: ModelStringInput | null;
  email?: ModelStringInput | null;
  user_name?: ModelStringInput | null;
  password?: ModelStringInput | null;
  and?: Array<ModelCoachdbFilterInput | null> | null;
  or?: Array<ModelCoachdbFilterInput | null> | null;
  not?: ModelCoachdbFilterInput | null;
};

export type ModelCoachdbConnection = {
  __typename: "ModelCoachdbConnection";
  items: Array<coachdb | null>;
  nextToken?: string | null;
};

export type ModelTeamdbFilterInput = {
  id?: ModelIDInput | null;
  club_id?: ModelStringInput | null;
  team_name?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  and?: Array<ModelTeamdbFilterInput | null> | null;
  or?: Array<ModelTeamdbFilterInput | null> | null;
  not?: ModelTeamdbFilterInput | null;
};

export type ModelTeamdbConnection = {
  __typename: "ModelTeamdbConnection";
  items: Array<teamdb | null>;
  nextToken?: string | null;
};

export type ModelPlayerdbFilterInput = {
  id?: ModelIDInput | null;
  team_id?: ModelStringInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  user_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  image?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  address?: ModelStringInput | null;
  height?: ModelStringInput | null;
  weight?: ModelStringInput | null;
  nationality?: ModelStringInput | null;
  birthplace?: ModelStringInput | null;
  languages?: ModelStringInput | null;
  urgent_contact?: ModelStringInput | null;
  preferred_foot?: ModelStringInput | null;
  shirt_number?: ModelStringInput | null;
  previous_club?: ModelStringInput | null;
  license_number?: ModelStringInput | null;
  transferred_players?: ModelStringInput | null;
  first_license?: ModelStringInput | null;
  national_team?: ModelStringInput | null;
  positions?: ModelStringInput | null;
  contract_length?: ModelStringInput | null;
  teamwallet_admin?: ModelStringInput | null;
  mobile_number?: ModelStringInput | null;
  pain?: ModelStringInput | null;
  intensive?: ModelStringInput | null;
  feel_after_training?: ModelStringInput | null;
  cool_after_training?: ModelStringInput | null;
  hours_of_sleep?: ModelStringInput | null;
  stressful?: ModelStringInput | null;
  and?: Array<ModelPlayerdbFilterInput | null> | null;
  or?: Array<ModelPlayerdbFilterInput | null> | null;
  not?: ModelPlayerdbFilterInput | null;
};

export type ModelPlayerdbConnection = {
  __typename: "ModelPlayerdbConnection";
  items: Array<playerdb | null>;
  nextToken?: string | null;
};

export type ModelMedicsdbFilterInput = {
  id?: ModelIDInput | null;
  team_name?: ModelStringInput | null;
  team_id?: ModelStringInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  user_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  and?: Array<ModelMedicsdbFilterInput | null> | null;
  or?: Array<ModelMedicsdbFilterInput | null> | null;
  not?: ModelMedicsdbFilterInput | null;
};

export type ModelMedicsdbConnection = {
  __typename: "ModelMedicsdbConnection";
  items: Array<medicsdb | null>;
  nextToken?: string | null;
};

export type ModelDnadbFilterInput = {
  league_name?: ModelStringInput | null;
  cup_name_1?: ModelStringInput | null;
  cup_name_2?: ModelStringInput | null;
  jersy_color?: ModelStringInput | null;
  shorts_color?: ModelStringInput | null;
  socks_color?: ModelStringInput | null;
  player_home?: ModelStringInput | null;
  player_away?: ModelStringInput | null;
  player_third?: ModelStringInput | null;
  goalkeeper_home?: ModelStringInput | null;
  goalkeeper_away?: ModelStringInput | null;
  goalkeeper_third?: ModelStringInput | null;
  team_id?: ModelStringInput | null;
  and?: Array<ModelDnadbFilterInput | null> | null;
  or?: Array<ModelDnadbFilterInput | null> | null;
  not?: ModelDnadbFilterInput | null;
};

export type ModelDnadbConnection = {
  __typename: "ModelDnadbConnection";
  items: Array<dnadb | null>;
  nextToken?: string | null;
};

export type ModelStaffsdbFilterInput = {
  id?: ModelIDInput | null;
  team_id?: ModelStringInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  user_name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  and?: Array<ModelStaffsdbFilterInput | null> | null;
  or?: Array<ModelStaffsdbFilterInput | null> | null;
  not?: ModelStaffsdbFilterInput | null;
};

export type ModelStaffsdbConnection = {
  __typename: "ModelStaffsdbConnection";
  items: Array<staffsdb | null>;
  nextToken?: string | null;
};

export type TableTrainingdbFilterInput = {
  id?: TableIDFilterInput | null;
  team_id?: TableStringFilterInput | null;
  describe?: TableStringFilterInput | null;
  training_date?: TableStringFilterInput | null;
  RDV_time?: TableStringFilterInput | null;
  start_time?: TableStringFilterInput | null;
  end_time?: TableStringFilterInput | null;
  training_Address?: TableStringFilterInput | null;
  training_type?: TableStringFilterInput | null;
  repeat?: TableStringFilterInput | null;
  end_repeat?: TableStringFilterInput | null;
  selection?: TableStringFilterInput | null;
  player?: TableStringFilterInput | null;
  add_to_calendar?: TableBooleanFilterInput | null;
  send_notification?: TableBooleanFilterInput | null;
  post_in_chat?: TableBooleanFilterInput | null;
};

export type TableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type trainingdbConnection = {
  __typename: "trainingdbConnection";
  items?: Array<trainingdb | null> | null;
  nextToken?: string | null;
};

export type CreateClubdbMutation = {
  __typename: "clubdb";
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClubdbMutation = {
  __typename: "clubdb";
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClubdbMutation = {
  __typename: "clubdb";
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCoachdbMutation = {
  __typename: "coachdb";
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCoachdbMutation = {
  __typename: "coachdb";
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCoachdbMutation = {
  __typename: "coachdb";
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTeamdbMutation = {
  __typename: "teamdb";
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTeamdbMutation = {
  __typename: "teamdb";
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTeamdbMutation = {
  __typename: "teamdb";
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePlayerdbMutation = {
  __typename: "playerdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePlayerdbMutation = {
  __typename: "playerdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePlayerdbMutation = {
  __typename: "playerdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMedicsdbMutation = {
  __typename: "medicsdb";
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMedicsdbMutation = {
  __typename: "medicsdb";
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMedicsdbMutation = {
  __typename: "medicsdb";
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDnadbMutation = {
  __typename: "dnadb";
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDnadbMutation = {
  __typename: "dnadb";
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDnadbMutation = {
  __typename: "dnadb";
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateStaffsdbMutation = {
  __typename: "staffsdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStaffsdbMutation = {
  __typename: "staffsdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStaffsdbMutation = {
  __typename: "staffsdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTrainingdbMutation = {
  __typename: "trainingdb";
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type UpdateTrainingdbMutation = {
  __typename: "trainingdb";
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type DeleteTrainingdbMutation = {
  __typename: "trainingdb";
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type GetClubdbQuery = {
  __typename: "clubdb";
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type ListClubdbsQuery = {
  __typename: "ModelClubdbConnection";
  items: Array<{
    __typename: "clubdb";
    id: string;
    club_name?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    email?: string | null;
    password?: string | null;
    logo?: string | null;
    stadium_name?: string | null;
    stadium_address?: string | null;
    field_name1?: string | null;
    field_name2?: string | null;
    field_name3?: string | null;
    field_address1?: string | null;
    field_address2?: string | null;
    field_address3?: string | null;
    fitness_name?: string | null;
    fitness_address?: string | null;
    club_access?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCoachdbQuery = {
  __typename: "coachdb";
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCoachdbsQuery = {
  __typename: "ModelCoachdbConnection";
  items: Array<{
    __typename: "coachdb";
    id: string;
    logo?: string | null;
    coach_name?: string | null;
    team_name?: string | null;
    team_id?: string | null;
    email?: string | null;
    user_name?: string | null;
    password?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTeamdbQuery = {
  __typename: "teamdb";
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTeamdbsQuery = {
  __typename: "ModelTeamdbConnection";
  items: Array<{
    __typename: "teamdb";
    id: string;
    club_id?: string | null;
    team_name?: string | null;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetPlayerdbQuery = {
  __typename: "playerdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPlayerdbsQuery = {
  __typename: "ModelPlayerdbConnection";
  items: Array<{
    __typename: "playerdb";
    id: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    user_name?: string | null;
    email?: string | null;
    password?: string | null;
    image?: string | null;
    dob?: string | null;
    address?: string | null;
    height?: string | null;
    weight?: string | null;
    nationality?: string | null;
    birthplace?: string | null;
    languages?: string | null;
    urgent_contact?: string | null;
    preferred_foot?: string | null;
    shirt_number?: string | null;
    previous_club?: string | null;
    license_number?: string | null;
    transferred_players?: string | null;
    first_license?: string | null;
    national_team?: string | null;
    positions?: string | null;
    contract_length?: string | null;
    teamwallet_admin?: string | null;
    mobile_number?: string | null;
    pain?: string | null;
    intensive?: string | null;
    feel_after_training?: string | null;
    cool_after_training?: string | null;
    hours_of_sleep?: string | null;
    stressful?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetMedicsdbQuery = {
  __typename: "medicsdb";
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMedicsdbsQuery = {
  __typename: "ModelMedicsdbConnection";
  items: Array<{
    __typename: "medicsdb";
    id: string;
    team_name?: string | null;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    user_name?: string | null;
    email?: string | null;
    password?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetDnadbQuery = {
  __typename: "dnadb";
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListDnadbsQuery = {
  __typename: "ModelDnadbConnection";
  items: Array<{
    __typename: "dnadb";
    league_name?: string | null;
    cup_name_1?: string | null;
    cup_name_2?: string | null;
    jersy_color?: string | null;
    shorts_color?: string | null;
    socks_color?: string | null;
    player_home?: string | null;
    player_away?: string | null;
    player_third?: string | null;
    goalkeeper_home?: string | null;
    goalkeeper_away?: string | null;
    goalkeeper_third?: string | null;
    team_id?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetStaffsdbQuery = {
  __typename: "staffsdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListStaffsdbsQuery = {
  __typename: "ModelStaffsdbConnection";
  items: Array<{
    __typename: "staffsdb";
    id: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    user_name?: string | null;
    email?: string | null;
    password?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTrainingdbQuery = {
  __typename: "trainingdb";
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type ListTrainingdbsQuery = {
  __typename: "trainingdbConnection";
  items?: Array<{
    __typename: "trainingdb";
    id: string;
    team_id?: string | null;
    describe?: string | null;
    training_date?: string | null;
    RDV_time?: string | null;
    start_time?: string | null;
    end_time?: string | null;
    training_Address?: string | null;
    training_type?: string | null;
    repeat?: string | null;
    end_repeat?: string | null;
    selection?: string | null;
    player: Array<string | null>;
    add_to_calendar?: boolean | null;
    send_notification?: boolean | null;
    post_in_chat?: boolean | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateClubdbSubscription = {
  __typename: "clubdb";
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClubdbSubscription = {
  __typename: "clubdb";
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClubdbSubscription = {
  __typename: "clubdb";
  id: string;
  club_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  logo?: string | null;
  stadium_name?: string | null;
  stadium_address?: string | null;
  field_name1?: string | null;
  field_name2?: string | null;
  field_name3?: string | null;
  field_address1?: string | null;
  field_address2?: string | null;
  field_address3?: string | null;
  fitness_name?: string | null;
  fitness_address?: string | null;
  club_access?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCoachdbSubscription = {
  __typename: "coachdb";
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCoachdbSubscription = {
  __typename: "coachdb";
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCoachdbSubscription = {
  __typename: "coachdb";
  id: string;
  logo?: string | null;
  coach_name?: string | null;
  team_name?: string | null;
  team_id?: string | null;
  email?: string | null;
  user_name?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTeamdbSubscription = {
  __typename: "teamdb";
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTeamdbSubscription = {
  __typename: "teamdb";
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTeamdbSubscription = {
  __typename: "teamdb";
  id: string;
  club_id?: string | null;
  team_name?: string | null;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePlayerdbSubscription = {
  __typename: "playerdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePlayerdbSubscription = {
  __typename: "playerdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePlayerdbSubscription = {
  __typename: "playerdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
  dob?: string | null;
  address?: string | null;
  height?: string | null;
  weight?: string | null;
  nationality?: string | null;
  birthplace?: string | null;
  languages?: string | null;
  urgent_contact?: string | null;
  preferred_foot?: string | null;
  shirt_number?: string | null;
  previous_club?: string | null;
  license_number?: string | null;
  transferred_players?: string | null;
  first_license?: string | null;
  national_team?: string | null;
  positions?: string | null;
  contract_length?: string | null;
  teamwallet_admin?: string | null;
  mobile_number?: string | null;
  pain?: string | null;
  intensive?: string | null;
  feel_after_training?: string | null;
  cool_after_training?: string | null;
  hours_of_sleep?: string | null;
  stressful?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMedicsdbSubscription = {
  __typename: "medicsdb";
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMedicsdbSubscription = {
  __typename: "medicsdb";
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMedicsdbSubscription = {
  __typename: "medicsdb";
  id: string;
  team_name?: string | null;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDnadbSubscription = {
  __typename: "dnadb";
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDnadbSubscription = {
  __typename: "dnadb";
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDnadbSubscription = {
  __typename: "dnadb";
  league_name?: string | null;
  cup_name_1?: string | null;
  cup_name_2?: string | null;
  jersy_color?: string | null;
  shorts_color?: string | null;
  socks_color?: string | null;
  player_home?: string | null;
  player_away?: string | null;
  player_third?: string | null;
  goalkeeper_home?: string | null;
  goalkeeper_away?: string | null;
  goalkeeper_third?: string | null;
  team_id?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateStaffsdbSubscription = {
  __typename: "staffsdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStaffsdbSubscription = {
  __typename: "staffsdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStaffsdbSubscription = {
  __typename: "staffsdb";
  id: string;
  team_id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTrainingdbSubscription = {
  __typename: "trainingdb";
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type OnUpdateTrainingdbSubscription = {
  __typename: "trainingdb";
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

export type OnDeleteTrainingdbSubscription = {
  __typename: "trainingdb";
  id: string;
  team_id?: string | null;
  describe?: string | null;
  training_date?: string | null;
  RDV_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  training_Address?: string | null;
  training_type?: string | null;
  repeat?: string | null;
  end_repeat?: string | null;
  selection?: string | null;
  player: Array<string | null>;
  add_to_calendar?: boolean | null;
  send_notification?: boolean | null;
  post_in_chat?: boolean | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateClubdb(
    input: CreateClubdbInput,
    condition?: ModelClubdbConditionInput
  ): Promise<CreateClubdbMutation> {
    const statement = `mutation CreateClubdb($input: CreateClubdbInput!, $condition: ModelClubdbConditionInput) {
        createClubdb(input: $input, condition: $condition) {
          __typename
          id
          club_name
          first_name
          last_name
          email
          password
          logo
          stadium_name
          stadium_address
          field_name1
          field_name2
          field_name3
          field_address1
          field_address2
          field_address3
          fitness_name
          fitness_address
          club_access
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClubdbMutation>response.data.createClubdb;
  }
  async UpdateClubdb(
    input: UpdateClubdbInput,
    condition?: ModelClubdbConditionInput
  ): Promise<UpdateClubdbMutation> {
    const statement = `mutation UpdateClubdb($input: UpdateClubdbInput!, $condition: ModelClubdbConditionInput) {
        updateClubdb(input: $input, condition: $condition) {
          __typename
          id
          club_name
          first_name
          last_name
          email
          password
          logo
          stadium_name
          stadium_address
          field_name1
          field_name2
          field_name3
          field_address1
          field_address2
          field_address3
          fitness_name
          fitness_address
          club_access
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClubdbMutation>response.data.updateClubdb;
  }
  async DeleteClubdb(
    input: DeleteClubdbInput,
    condition?: ModelClubdbConditionInput
  ): Promise<DeleteClubdbMutation> {
    const statement = `mutation DeleteClubdb($input: DeleteClubdbInput!, $condition: ModelClubdbConditionInput) {
        deleteClubdb(input: $input, condition: $condition) {
          __typename
          id
          club_name
          first_name
          last_name
          email
          password
          logo
          stadium_name
          stadium_address
          field_name1
          field_name2
          field_name3
          field_address1
          field_address2
          field_address3
          fitness_name
          fitness_address
          club_access
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClubdbMutation>response.data.deleteClubdb;
  }
  async CreateCoachdb(
    input: CreateCoachdbInput,
    condition?: ModelCoachdbConditionInput
  ): Promise<CreateCoachdbMutation> {
    const statement = `mutation CreateCoachdb($input: CreateCoachdbInput!, $condition: ModelCoachdbConditionInput) {
        createCoachdb(input: $input, condition: $condition) {
          __typename
          id
          logo
          coach_name
          team_name
          team_id
          email
          user_name
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCoachdbMutation>response.data.createCoachdb;
  }
  async UpdateCoachdb(
    input: UpdateCoachdbInput,
    condition?: ModelCoachdbConditionInput
  ): Promise<UpdateCoachdbMutation> {
    const statement = `mutation UpdateCoachdb($input: UpdateCoachdbInput!, $condition: ModelCoachdbConditionInput) {
        updateCoachdb(input: $input, condition: $condition) {
          __typename
          id
          logo
          coach_name
          team_name
          team_id
          email
          user_name
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCoachdbMutation>response.data.updateCoachdb;
  }
  async DeleteCoachdb(
    input: DeleteCoachdbInput,
    condition?: ModelCoachdbConditionInput
  ): Promise<DeleteCoachdbMutation> {
    const statement = `mutation DeleteCoachdb($input: DeleteCoachdbInput!, $condition: ModelCoachdbConditionInput) {
        deleteCoachdb(input: $input, condition: $condition) {
          __typename
          id
          logo
          coach_name
          team_name
          team_id
          email
          user_name
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCoachdbMutation>response.data.deleteCoachdb;
  }
  async CreateTeamdb(
    input: CreateTeamdbInput,
    condition?: ModelTeamdbConditionInput
  ): Promise<CreateTeamdbMutation> {
    const statement = `mutation CreateTeamdb($input: CreateTeamdbInput!, $condition: ModelTeamdbConditionInput) {
        createTeamdb(input: $input, condition: $condition) {
          __typename
          id
          club_id
          team_name
          logo
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTeamdbMutation>response.data.createTeamdb;
  }
  async UpdateTeamdb(
    input: UpdateTeamdbInput,
    condition?: ModelTeamdbConditionInput
  ): Promise<UpdateTeamdbMutation> {
    const statement = `mutation UpdateTeamdb($input: UpdateTeamdbInput!, $condition: ModelTeamdbConditionInput) {
        updateTeamdb(input: $input, condition: $condition) {
          __typename
          id
          club_id
          team_name
          logo
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTeamdbMutation>response.data.updateTeamdb;
  }
  async DeleteTeamdb(
    input: DeleteTeamdbInput,
    condition?: ModelTeamdbConditionInput
  ): Promise<DeleteTeamdbMutation> {
    const statement = `mutation DeleteTeamdb($input: DeleteTeamdbInput!, $condition: ModelTeamdbConditionInput) {
        deleteTeamdb(input: $input, condition: $condition) {
          __typename
          id
          club_id
          team_name
          logo
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTeamdbMutation>response.data.deleteTeamdb;
  }
  async CreatePlayerdb(
    input: CreatePlayerdbInput,
    condition?: ModelPlayerdbConditionInput
  ): Promise<CreatePlayerdbMutation> {
    const statement = `mutation CreatePlayerdb($input: CreatePlayerdbInput!, $condition: ModelPlayerdbConditionInput) {
        createPlayerdb(input: $input, condition: $condition) {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          image
          dob
          address
          height
          weight
          nationality
          birthplace
          languages
          urgent_contact
          preferred_foot
          shirt_number
          previous_club
          license_number
          transferred_players
          first_license
          national_team
          positions
          contract_length
          teamwallet_admin
          mobile_number
          pain
          intensive
          feel_after_training
          cool_after_training
          hours_of_sleep
          stressful
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlayerdbMutation>response.data.createPlayerdb;
  }
  async UpdatePlayerdb(
    input: UpdatePlayerdbInput,
    condition?: ModelPlayerdbConditionInput
  ): Promise<UpdatePlayerdbMutation> {
    const statement = `mutation UpdatePlayerdb($input: UpdatePlayerdbInput!, $condition: ModelPlayerdbConditionInput) {
        updatePlayerdb(input: $input, condition: $condition) {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          image
          dob
          address
          height
          weight
          nationality
          birthplace
          languages
          urgent_contact
          preferred_foot
          shirt_number
          previous_club
          license_number
          transferred_players
          first_license
          national_team
          positions
          contract_length
          teamwallet_admin
          mobile_number
          pain
          intensive
          feel_after_training
          cool_after_training
          hours_of_sleep
          stressful
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlayerdbMutation>response.data.updatePlayerdb;
  }
  async DeletePlayerdb(
    input: DeletePlayerdbInput,
    condition?: ModelPlayerdbConditionInput
  ): Promise<DeletePlayerdbMutation> {
    const statement = `mutation DeletePlayerdb($input: DeletePlayerdbInput!, $condition: ModelPlayerdbConditionInput) {
        deletePlayerdb(input: $input, condition: $condition) {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          image
          dob
          address
          height
          weight
          nationality
          birthplace
          languages
          urgent_contact
          preferred_foot
          shirt_number
          previous_club
          license_number
          transferred_players
          first_license
          national_team
          positions
          contract_length
          teamwallet_admin
          mobile_number
          pain
          intensive
          feel_after_training
          cool_after_training
          hours_of_sleep
          stressful
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlayerdbMutation>response.data.deletePlayerdb;
  }
  async CreateMedicsdb(
    input: CreateMedicsdbInput,
    condition?: ModelMedicsdbConditionInput
  ): Promise<CreateMedicsdbMutation> {
    const statement = `mutation CreateMedicsdb($input: CreateMedicsdbInput!, $condition: ModelMedicsdbConditionInput) {
        createMedicsdb(input: $input, condition: $condition) {
          __typename
          id
          team_name
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMedicsdbMutation>response.data.createMedicsdb;
  }
  async UpdateMedicsdb(
    input: UpdateMedicsdbInput,
    condition?: ModelMedicsdbConditionInput
  ): Promise<UpdateMedicsdbMutation> {
    const statement = `mutation UpdateMedicsdb($input: UpdateMedicsdbInput!, $condition: ModelMedicsdbConditionInput) {
        updateMedicsdb(input: $input, condition: $condition) {
          __typename
          id
          team_name
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMedicsdbMutation>response.data.updateMedicsdb;
  }
  async DeleteMedicsdb(
    input: DeleteMedicsdbInput,
    condition?: ModelMedicsdbConditionInput
  ): Promise<DeleteMedicsdbMutation> {
    const statement = `mutation DeleteMedicsdb($input: DeleteMedicsdbInput!, $condition: ModelMedicsdbConditionInput) {
        deleteMedicsdb(input: $input, condition: $condition) {
          __typename
          id
          team_name
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMedicsdbMutation>response.data.deleteMedicsdb;
  }
  async CreateDnadb(
    input: CreateDnadbInput,
    condition?: ModelDnadbConditionInput
  ): Promise<CreateDnadbMutation> {
    const statement = `mutation CreateDnadb($input: CreateDnadbInput!, $condition: ModelDnadbConditionInput) {
        createDnadb(input: $input, condition: $condition) {
          __typename
          league_name
          cup_name_1
          cup_name_2
          jersy_color
          shorts_color
          socks_color
          player_home
          player_away
          player_third
          goalkeeper_home
          goalkeeper_away
          goalkeeper_third
          team_id
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDnadbMutation>response.data.createDnadb;
  }
  async UpdateDnadb(
    input: UpdateDnadbInput,
    condition?: ModelDnadbConditionInput
  ): Promise<UpdateDnadbMutation> {
    const statement = `mutation UpdateDnadb($input: UpdateDnadbInput!, $condition: ModelDnadbConditionInput) {
        updateDnadb(input: $input, condition: $condition) {
          __typename
          league_name
          cup_name_1
          cup_name_2
          jersy_color
          shorts_color
          socks_color
          player_home
          player_away
          player_third
          goalkeeper_home
          goalkeeper_away
          goalkeeper_third
          team_id
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDnadbMutation>response.data.updateDnadb;
  }
  async DeleteDnadb(
    input: DeleteDnadbInput,
    condition?: ModelDnadbConditionInput
  ): Promise<DeleteDnadbMutation> {
    const statement = `mutation DeleteDnadb($input: DeleteDnadbInput!, $condition: ModelDnadbConditionInput) {
        deleteDnadb(input: $input, condition: $condition) {
          __typename
          league_name
          cup_name_1
          cup_name_2
          jersy_color
          shorts_color
          socks_color
          player_home
          player_away
          player_third
          goalkeeper_home
          goalkeeper_away
          goalkeeper_third
          team_id
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDnadbMutation>response.data.deleteDnadb;
  }
  async CreateStaffsdb(
    input: CreateStaffsdbInput,
    condition?: ModelStaffsdbConditionInput
  ): Promise<CreateStaffsdbMutation> {
    const statement = `mutation CreateStaffsdb($input: CreateStaffsdbInput!, $condition: ModelStaffsdbConditionInput) {
        createStaffsdb(input: $input, condition: $condition) {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStaffsdbMutation>response.data.createStaffsdb;
  }
  async UpdateStaffsdb(
    input: UpdateStaffsdbInput,
    condition?: ModelStaffsdbConditionInput
  ): Promise<UpdateStaffsdbMutation> {
    const statement = `mutation UpdateStaffsdb($input: UpdateStaffsdbInput!, $condition: ModelStaffsdbConditionInput) {
        updateStaffsdb(input: $input, condition: $condition) {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStaffsdbMutation>response.data.updateStaffsdb;
  }
  async DeleteStaffsdb(
    input: DeleteStaffsdbInput,
    condition?: ModelStaffsdbConditionInput
  ): Promise<DeleteStaffsdbMutation> {
    const statement = `mutation DeleteStaffsdb($input: DeleteStaffsdbInput!, $condition: ModelStaffsdbConditionInput) {
        deleteStaffsdb(input: $input, condition: $condition) {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStaffsdbMutation>response.data.deleteStaffsdb;
  }
  async CreateTrainingdb(
    input: CreateTrainingdbInput
  ): Promise<CreateTrainingdbMutation> {
    const statement = `mutation CreateTrainingdb($input: CreateTrainingdbInput!) {
        createTrainingdb(input: $input) {
          __typename
          id
          team_id
          describe
          training_date
          RDV_time
          start_time
          end_time
          training_Address
          training_type
          repeat
          end_repeat
          selection
          player
          add_to_calendar
          send_notification
          post_in_chat
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTrainingdbMutation>response.data.createTrainingdb;
  }
  async UpdateTrainingdb(
    input: UpdateTrainingdbInput
  ): Promise<UpdateTrainingdbMutation> {
    const statement = `mutation UpdateTrainingdb($input: UpdateTrainingdbInput!) {
        updateTrainingdb(input: $input) {
          __typename
          id
          team_id
          describe
          training_date
          RDV_time
          start_time
          end_time
          training_Address
          training_type
          repeat
          end_repeat
          selection
          player
          add_to_calendar
          send_notification
          post_in_chat
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTrainingdbMutation>response.data.updateTrainingdb;
  }
  async DeleteTrainingdb(
    input: DeleteTrainingdbInput
  ): Promise<DeleteTrainingdbMutation> {
    const statement = `mutation DeleteTrainingdb($input: DeleteTrainingdbInput!) {
        deleteTrainingdb(input: $input) {
          __typename
          id
          team_id
          describe
          training_date
          RDV_time
          start_time
          end_time
          training_Address
          training_type
          repeat
          end_repeat
          selection
          player
          add_to_calendar
          send_notification
          post_in_chat
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTrainingdbMutation>response.data.deleteTrainingdb;
  }
  async GetClubdb(id: string): Promise<GetClubdbQuery> {
    const statement = `query GetClubdb($id: ID!) {
        getClubdb(id: $id) {
          __typename
          id
          club_name
          first_name
          last_name
          email
          password
          logo
          stadium_name
          stadium_address
          field_name1
          field_name2
          field_name3
          field_address1
          field_address2
          field_address3
          fitness_name
          fitness_address
          club_access
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClubdbQuery>response.data.getClubdb;
  }
  async ListClubdbs(
    filter?: ModelClubdbFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClubdbsQuery> {
    const statement = `query ListClubdbs($filter: ModelClubdbFilterInput, $limit: Int, $nextToken: String) {
        listClubdbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            club_name
            first_name
            last_name
            email
            password
            logo
            stadium_name
            stadium_address
            field_name1
            field_name2
            field_name3
            field_address1
            field_address2
            field_address3
            fitness_name
            fitness_address
            club_access
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClubdbsQuery>response.data.listClubdbs;
  }
  async GetCoachdb(id: string): Promise<GetCoachdbQuery> {
    const statement = `query GetCoachdb($id: ID!) {
        getCoachdb(id: $id) {
          __typename
          id
          logo
          coach_name
          team_name
          team_id
          email
          user_name
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCoachdbQuery>response.data.getCoachdb;
  }
  async ListCoachdbs(
    filter?: ModelCoachdbFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCoachdbsQuery> {
    const statement = `query ListCoachdbs($filter: ModelCoachdbFilterInput, $limit: Int, $nextToken: String) {
        listCoachdbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            logo
            coach_name
            team_name
            team_id
            email
            user_name
            password
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCoachdbsQuery>response.data.listCoachdbs;
  }
  async GetTeamdb(id: string): Promise<GetTeamdbQuery> {
    const statement = `query GetTeamdb($id: ID!) {
        getTeamdb(id: $id) {
          __typename
          id
          club_id
          team_name
          logo
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTeamdbQuery>response.data.getTeamdb;
  }
  async ListTeamdbs(
    filter?: ModelTeamdbFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTeamdbsQuery> {
    const statement = `query ListTeamdbs($filter: ModelTeamdbFilterInput, $limit: Int, $nextToken: String) {
        listTeamdbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            club_id
            team_name
            logo
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTeamdbsQuery>response.data.listTeamdbs;
  }
  async GetPlayerdb(id: string): Promise<GetPlayerdbQuery> {
    const statement = `query GetPlayerdb($id: ID!) {
        getPlayerdb(id: $id) {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          image
          dob
          address
          height
          weight
          nationality
          birthplace
          languages
          urgent_contact
          preferred_foot
          shirt_number
          previous_club
          license_number
          transferred_players
          first_license
          national_team
          positions
          contract_length
          teamwallet_admin
          mobile_number
          pain
          intensive
          feel_after_training
          cool_after_training
          hours_of_sleep
          stressful
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlayerdbQuery>response.data.getPlayerdb;
  }
  async ListPlayerdbs(
    filter?: ModelPlayerdbFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlayerdbsQuery> {
    const statement = `query ListPlayerdbs($filter: ModelPlayerdbFilterInput, $limit: Int, $nextToken: String) {
        listPlayerdbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            team_id
            first_name
            last_name
            user_name
            email
            password
            image
            dob
            address
            height
            weight
            nationality
            birthplace
            languages
            urgent_contact
            preferred_foot
            shirt_number
            previous_club
            license_number
            transferred_players
            first_license
            national_team
            positions
            contract_length
            teamwallet_admin
            mobile_number
            pain
            intensive
            feel_after_training
            cool_after_training
            hours_of_sleep
            stressful
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPlayerdbsQuery>response.data.listPlayerdbs;
  }
  async GetMedicsdb(id: string): Promise<GetMedicsdbQuery> {
    const statement = `query GetMedicsdb($id: ID!) {
        getMedicsdb(id: $id) {
          __typename
          id
          team_name
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMedicsdbQuery>response.data.getMedicsdb;
  }
  async ListMedicsdbs(
    filter?: ModelMedicsdbFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMedicsdbsQuery> {
    const statement = `query ListMedicsdbs($filter: ModelMedicsdbFilterInput, $limit: Int, $nextToken: String) {
        listMedicsdbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            team_name
            team_id
            first_name
            last_name
            user_name
            email
            password
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMedicsdbsQuery>response.data.listMedicsdbs;
  }
  async GetDnadb(id: string): Promise<GetDnadbQuery> {
    const statement = `query GetDnadb($id: ID!) {
        getDnadb(id: $id) {
          __typename
          league_name
          cup_name_1
          cup_name_2
          jersy_color
          shorts_color
          socks_color
          player_home
          player_away
          player_third
          goalkeeper_home
          goalkeeper_away
          goalkeeper_third
          team_id
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDnadbQuery>response.data.getDnadb;
  }
  async ListDnadbs(
    filter?: ModelDnadbFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDnadbsQuery> {
    const statement = `query ListDnadbs($filter: ModelDnadbFilterInput, $limit: Int, $nextToken: String) {
        listDnadbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            league_name
            cup_name_1
            cup_name_2
            jersy_color
            shorts_color
            socks_color
            player_home
            player_away
            player_third
            goalkeeper_home
            goalkeeper_away
            goalkeeper_third
            team_id
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDnadbsQuery>response.data.listDnadbs;
  }
  async GetStaffsdb(id: string): Promise<GetStaffsdbQuery> {
    const statement = `query GetStaffsdb($id: ID!) {
        getStaffsdb(id: $id) {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStaffsdbQuery>response.data.getStaffsdb;
  }
  async ListStaffsdbs(
    filter?: ModelStaffsdbFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStaffsdbsQuery> {
    const statement = `query ListStaffsdbs($filter: ModelStaffsdbFilterInput, $limit: Int, $nextToken: String) {
        listStaffsdbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            team_id
            first_name
            last_name
            user_name
            email
            password
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStaffsdbsQuery>response.data.listStaffsdbs;
  }
  async GetTrainingdb(id: string): Promise<GetTrainingdbQuery> {
    const statement = `query GetTrainingdb($id: ID!) {
        getTrainingdb(id: $id) {
          __typename
          id
          team_id
          describe
          training_date
          RDV_time
          start_time
          end_time
          training_Address
          training_type
          repeat
          end_repeat
          selection
          player
          add_to_calendar
          send_notification
          post_in_chat
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTrainingdbQuery>response.data.getTrainingdb;
  }
  async ListTrainingdbs(
    filter?: TableTrainingdbFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTrainingdbsQuery> {
    const statement = `query ListTrainingdbs($filter: TableTrainingdbFilterInput, $limit: Int, $nextToken: String) {
        listTrainingdbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            team_id
            describe
            training_date
            RDV_time
            start_time
            end_time
            training_Address
            training_type
            repeat
            end_repeat
            selection
            player
            add_to_calendar
            send_notification
            post_in_chat
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTrainingdbsQuery>response.data.listTrainingdbs;
  }
  OnCreateClubdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClubdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateClubdb {
        onCreateClubdb {
          __typename
          id
          club_name
          first_name
          last_name
          email
          password
          logo
          stadium_name
          stadium_address
          field_name1
          field_name2
          field_name3
          field_address1
          field_address2
          field_address3
          fitness_name
          fitness_address
          club_access
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClubdb">>
  >;

  OnUpdateClubdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClubdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateClubdb {
        onUpdateClubdb {
          __typename
          id
          club_name
          first_name
          last_name
          email
          password
          logo
          stadium_name
          stadium_address
          field_name1
          field_name2
          field_name3
          field_address1
          field_address2
          field_address3
          fitness_name
          fitness_address
          club_access
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClubdb">>
  >;

  OnDeleteClubdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClubdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteClubdb {
        onDeleteClubdb {
          __typename
          id
          club_name
          first_name
          last_name
          email
          password
          logo
          stadium_name
          stadium_address
          field_name1
          field_name2
          field_name3
          field_address1
          field_address2
          field_address3
          fitness_name
          fitness_address
          club_access
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClubdb">>
  >;

  OnCreateCoachdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCoachdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCoachdb {
        onCreateCoachdb {
          __typename
          id
          logo
          coach_name
          team_name
          team_id
          email
          user_name
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCoachdb">>
  >;

  OnUpdateCoachdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCoachdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCoachdb {
        onUpdateCoachdb {
          __typename
          id
          logo
          coach_name
          team_name
          team_id
          email
          user_name
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCoachdb">>
  >;

  OnDeleteCoachdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCoachdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCoachdb {
        onDeleteCoachdb {
          __typename
          id
          logo
          coach_name
          team_name
          team_id
          email
          user_name
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCoachdb">>
  >;

  OnCreateTeamdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTeamdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTeamdb {
        onCreateTeamdb {
          __typename
          id
          club_id
          team_name
          logo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTeamdb">>
  >;

  OnUpdateTeamdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTeamdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTeamdb {
        onUpdateTeamdb {
          __typename
          id
          club_id
          team_name
          logo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTeamdb">>
  >;

  OnDeleteTeamdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTeamdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTeamdb {
        onDeleteTeamdb {
          __typename
          id
          club_id
          team_name
          logo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTeamdb">>
  >;

  OnCreatePlayerdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePlayerdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlayerdb {
        onCreatePlayerdb {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          image
          dob
          address
          height
          weight
          nationality
          birthplace
          languages
          urgent_contact
          preferred_foot
          shirt_number
          previous_club
          license_number
          transferred_players
          first_license
          national_team
          positions
          contract_length
          teamwallet_admin
          mobile_number
          pain
          intensive
          feel_after_training
          cool_after_training
          hours_of_sleep
          stressful
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePlayerdb">>
  >;

  OnUpdatePlayerdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePlayerdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlayerdb {
        onUpdatePlayerdb {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          image
          dob
          address
          height
          weight
          nationality
          birthplace
          languages
          urgent_contact
          preferred_foot
          shirt_number
          previous_club
          license_number
          transferred_players
          first_license
          national_team
          positions
          contract_length
          teamwallet_admin
          mobile_number
          pain
          intensive
          feel_after_training
          cool_after_training
          hours_of_sleep
          stressful
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePlayerdb">>
  >;

  OnDeletePlayerdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePlayerdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlayerdb {
        onDeletePlayerdb {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          image
          dob
          address
          height
          weight
          nationality
          birthplace
          languages
          urgent_contact
          preferred_foot
          shirt_number
          previous_club
          license_number
          transferred_players
          first_license
          national_team
          positions
          contract_length
          teamwallet_admin
          mobile_number
          pain
          intensive
          feel_after_training
          cool_after_training
          hours_of_sleep
          stressful
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePlayerdb">>
  >;

  OnCreateMedicsdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMedicsdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMedicsdb {
        onCreateMedicsdb {
          __typename
          id
          team_name
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMedicsdb">>
  >;

  OnUpdateMedicsdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMedicsdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMedicsdb {
        onUpdateMedicsdb {
          __typename
          id
          team_name
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMedicsdb">>
  >;

  OnDeleteMedicsdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMedicsdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMedicsdb {
        onDeleteMedicsdb {
          __typename
          id
          team_name
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMedicsdb">>
  >;

  OnCreateDnadbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDnadb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDnadb {
        onCreateDnadb {
          __typename
          league_name
          cup_name_1
          cup_name_2
          jersy_color
          shorts_color
          socks_color
          player_home
          player_away
          player_third
          goalkeeper_home
          goalkeeper_away
          goalkeeper_third
          team_id
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDnadb">>
  >;

  OnUpdateDnadbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDnadb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDnadb {
        onUpdateDnadb {
          __typename
          league_name
          cup_name_1
          cup_name_2
          jersy_color
          shorts_color
          socks_color
          player_home
          player_away
          player_third
          goalkeeper_home
          goalkeeper_away
          goalkeeper_third
          team_id
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDnadb">>
  >;

  OnDeleteDnadbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDnadb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDnadb {
        onDeleteDnadb {
          __typename
          league_name
          cup_name_1
          cup_name_2
          jersy_color
          shorts_color
          socks_color
          player_home
          player_away
          player_third
          goalkeeper_home
          goalkeeper_away
          goalkeeper_third
          team_id
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDnadb">>
  >;

  OnCreateStaffsdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStaffsdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateStaffsdb {
        onCreateStaffsdb {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStaffsdb">>
  >;

  OnUpdateStaffsdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStaffsdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStaffsdb {
        onUpdateStaffsdb {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStaffsdb">>
  >;

  OnDeleteStaffsdbListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStaffsdb">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStaffsdb {
        onDeleteStaffsdb {
          __typename
          id
          team_id
          first_name
          last_name
          user_name
          email
          password
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStaffsdb">>
  >;

  OnCreateTrainingdbListener(
    id?: string,
    team_id?: string,
    describe?: string,
    training_date?: string,
    RDV_time?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTrainingdb">>
  > {
    const statement = `subscription OnCreateTrainingdb($id: ID, $team_id: String, $describe: String, $training_date: String, $RDV_time: String) {
        onCreateTrainingdb(id: $id, team_id: $team_id, describe: $describe, training_date: $training_date, RDV_time: $RDV_time) {
          __typename
          id
          team_id
          describe
          training_date
          RDV_time
          start_time
          end_time
          training_Address
          training_type
          repeat
          end_repeat
          selection
          player
          add_to_calendar
          send_notification
          post_in_chat
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (team_id) {
      gqlAPIServiceArguments.team_id = team_id;
    }
    if (describe) {
      gqlAPIServiceArguments.describe = describe;
    }
    if (training_date) {
      gqlAPIServiceArguments.training_date = training_date;
    }
    if (RDV_time) {
      gqlAPIServiceArguments.RDV_time = RDV_time;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTrainingdb">>
    >;
  }

  OnUpdateTrainingdbListener(
    id?: string,
    team_id?: string,
    describe?: string,
    training_date?: string,
    RDV_time?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTrainingdb">>
  > {
    const statement = `subscription OnUpdateTrainingdb($id: ID, $team_id: String, $describe: String, $training_date: String, $RDV_time: String) {
        onUpdateTrainingdb(id: $id, team_id: $team_id, describe: $describe, training_date: $training_date, RDV_time: $RDV_time) {
          __typename
          id
          team_id
          describe
          training_date
          RDV_time
          start_time
          end_time
          training_Address
          training_type
          repeat
          end_repeat
          selection
          player
          add_to_calendar
          send_notification
          post_in_chat
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (team_id) {
      gqlAPIServiceArguments.team_id = team_id;
    }
    if (describe) {
      gqlAPIServiceArguments.describe = describe;
    }
    if (training_date) {
      gqlAPIServiceArguments.training_date = training_date;
    }
    if (RDV_time) {
      gqlAPIServiceArguments.RDV_time = RDV_time;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTrainingdb">>
    >;
  }

  OnDeleteTrainingdbListener(
    id?: string,
    team_id?: string,
    describe?: string,
    training_date?: string,
    RDV_time?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTrainingdb">>
  > {
    const statement = `subscription OnDeleteTrainingdb($id: ID, $team_id: String, $describe: String, $training_date: String, $RDV_time: String) {
        onDeleteTrainingdb(id: $id, team_id: $team_id, describe: $describe, training_date: $training_date, RDV_time: $RDV_time) {
          __typename
          id
          team_id
          describe
          training_date
          RDV_time
          start_time
          end_time
          training_Address
          training_type
          repeat
          end_repeat
          selection
          player
          add_to_calendar
          send_notification
          post_in_chat
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (team_id) {
      gqlAPIServiceArguments.team_id = team_id;
    }
    if (describe) {
      gqlAPIServiceArguments.describe = describe;
    }
    if (training_date) {
      gqlAPIServiceArguments.training_date = training_date;
    }
    if (RDV_time) {
      gqlAPIServiceArguments.RDV_time = RDV_time;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTrainingdb">>
    >;
  }
}
