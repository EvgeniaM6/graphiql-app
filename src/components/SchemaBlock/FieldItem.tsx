import { GraphQLNonNull } from 'graphql';
import { useAppDispatch } from '../../hooks/storeHooks';
import { addNestedObj } from '../../store/workspaceSlice';
import FieldArgItem from './FieldArgItem';
import FieldReturnTypeItem from './FieldReturnTypeItem';
import { TGrphQLField } from '../../models';

function FieldItem(props: { fieldName: string; fieldObj: TGrphQLField }): JSX.Element {
  const { fieldName, fieldObj } = props;
  const dispatch = useAppDispatch();

  const fieldObjType = fieldObj.type;
  const fieldArgsArr = fieldObj?.args || [];
  const fieldArg = fieldArgsArr.length ? fieldArgsArr[0] : null;

  const handleClickField = () => {
    dispatch(addNestedObj(fieldObj));
  };

  return (
    <div>
      <button type="button" onClick={handleClickField}>
        {`${fieldName}:`}
      </button>
      {fieldArg && (
        <>
          <span>(</span>
          <FieldArgItem fieldArg={fieldArg} />
          <span>)</span>
        </>
      )}
      <span>:</span>
      <FieldReturnTypeItem fieldObj={fieldObj} />
      {fieldObjType instanceof GraphQLNonNull && <span>!</span>}
    </div>
  );
}

export default FieldItem;
