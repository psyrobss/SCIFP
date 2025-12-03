
import { TherapeuticExercise } from '../types';
import { CBT_EXERCISES } from './exercises_cbt';
import { MINDFULNESS_EXERCISES } from './exercises_mindfulness';
import { DBT_DISTRESS_EXERCISES } from './exercises_dbt_distress';
import { DBT_ADVANCED_EXERCISES } from './exercises_dbt_advanced';
import { DBT_REGULATION_EXERCISES } from './exercises_dbt_regulation';
import { DBT_INTERPERSONAL_EXERCISES } from './exercises_dbt_interpersonal';
import { MOOD_TRACKING_EXERCISES } from './exercises/mood_stability/tracking';
import { MOOD_ENERGY_EXERCISES } from './exercises/mood_stability/energy';
import { MOOD_COGNITION_EXERCISES } from './exercises/mood_stability/cognition';
import { MOOD_RELATIONSHIPS_EXERCISES } from './exercises/mood_stability/relationships';

// Consolidação de todos os exercícios
export const ALL_EXERCISES: TherapeuticExercise[] = [
  ...CBT_EXERCISES,
  ...MINDFULNESS_EXERCISES,
  ...DBT_DISTRESS_EXERCISES,
  ...DBT_ADVANCED_EXERCISES,
  ...DBT_REGULATION_EXERCISES,
  ...DBT_INTERPERSONAL_EXERCISES,
  ...MOOD_TRACKING_EXERCISES,
  ...MOOD_ENERGY_EXERCISES,
  ...MOOD_COGNITION_EXERCISES,
  ...MOOD_RELATIONSHIPS_EXERCISES,
];
