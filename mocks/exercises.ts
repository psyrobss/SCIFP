
import { TherapeuticExercise } from '../types';

// Import all exercise modules using relative paths
import { CBT_EXERCISES } from './exercises_cbt';
import { CBT_RULES_EXERCISES } from './exercises_cbt_rules';
import { CBT_LOGIC_EXERCISES } from './exercises_cbt_logic';
import { CBT_DECISION_EXERCISES } from './exercises_cbt_decision';
import { CBT_INTRUSIVE_EXERCISES } from './exercises_cbt_intrusive';
import { CBT_WORRY_EXERCISES } from './exercises_cbt_worry';
import { CBT_PERSPECTIVE_EXERCISES } from './exercises_cbt_perspective';
import { CBT_SCHEMAS_EXERCISES } from './exercises_cbt_schemas';
import { CBT_ANGER_EXERCISES } from './exercises_cbt_anger';
import { CBT_PROCRASTINATION_EXERCISES } from './exercises_cbt_procrastination';
import { CBT_SELF_ESTEEM_EXERCISES } from './exercises_cbt_self_esteem';
import { CBT_EMOTIONAL_SCHEMAS_EXERCISES } from './exercises_cbt_emotional_schemas';
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
  ...CBT_RULES_EXERCISES,
  ...CBT_LOGIC_EXERCISES,
  ...CBT_DECISION_EXERCISES,
  ...CBT_INTRUSIVE_EXERCISES,
  ...CBT_WORRY_EXERCISES,
  ...CBT_PERSPECTIVE_EXERCISES,
  ...CBT_SCHEMAS_EXERCISES,
  ...CBT_ANGER_EXERCISES,
  ...CBT_PROCRASTINATION_EXERCISES,
  ...CBT_SELF_ESTEEM_EXERCISES,
  ...CBT_EMOTIONAL_SCHEMAS_EXERCISES,
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
