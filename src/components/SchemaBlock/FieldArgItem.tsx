import {
  GraphQLArgument,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLScalarType,
} from 'graphql';
import { useAppDispatch } from '../../hooks/storeHooks';
import { addNestedObj } from '../../store/workspaceSlice';
import { Rrr } from './schema.model';

function FieldArgItem(props: { fieldArg: GraphQLArgument }) {
  const { fieldArg } = props;
  const dispatch = useAppDispatch();

  const fieldArgType = fieldArg?.type || null;
  const isFieldTypeCode = !!fieldArgType && 'ofType' in fieldArgType;

  const handleClickArg = () => {
    const nestedObj = isFieldTypeCode ? fieldArgType.ofType : fieldArgType;
    dispatch(addNestedObj(nestedObj as GraphQLScalarType | GraphQLInputObjectType));
  };

  return (
    <>
      <span>{`${fieldArg.name}:`}</span>
      <button type="button" onClick={handleClickArg}>
        {isFieldTypeCode ? `${(fieldArgType.ofType as Rrr).name}` : fieldArgType?.name}
      </button>
      {fieldArgType instanceof GraphQLNonNull && <span>!</span>}
      {!isFieldTypeCode && <span>{' = {}'}</span>}
    </>
  );
}

export default FieldArgItem;
