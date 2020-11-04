import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal, Button, FormAddCNAE, notification,
} from 'components'

const AddCNAEModal = ({
  modalVisible,
  setModalVisible,
  id,
  setId,
  category,
  setCategory,
  segment,
  setSegment,
  shortCode,
  setShortCode,
  CNAE,
  setCNAE,
  name,
  setName,
  categories,
  segments,
  shortCodes,
  loading,
  setLoading,
  getShortCodes,
  getSegments,
  client,
}) => {
  const handleCNAE = () => {
  }

  const handleCancel = () => {
    setModalVisible(false)
  }

  return (
    <Modal
      title={t('molecules.Modals.AddCNAEModal.title')}
      visible={modalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          molecules.Modals.AddCNAEModal.cancel
        </Button>,
        <Button key="save" type="primary" loading={loading} onClick={handleCNAE}>
          molecules.Modals.AddCNAEModal.save
        </Button>,
      ]}
    >

      <FormAddCNAE
        client={client}
        id={id}
        setId={setId}
        category={category}
        setCategory={setCategory}
        segment={segment}
        setSegment={setSegment}
        shortCode={shortCode}
        setShortCode={setShortCode}
        CNAE={CNAE}
        setCNAE={setCNAE}
        name={name}
        setName={setName}
        categories={categories}
        segments={segments}
        getShortCodes={getShortCodes}
        getSegments={getSegments}
        shortCodes={shortCodes}
      />
    </Modal>
  )
}

AddCNAEModal.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  id: PropTypes.number,
  setId: PropTypes.func,
  category: PropTypes.number,
  setCategory: PropTypes.func,
  segment: PropTypes.number,
  setSegment: PropTypes.func,
  shortCode: PropTypes.number,
  setShortCode: PropTypes.func,
  CNAE: PropTypes.string,
  setCNAE: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  categories: PropTypes.array,
  segments: PropTypes.array,
  shortCodes: PropTypes.array,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
  getShortCodes: PropTypes.func,
  getSegments: PropTypes.func,
  client: PropTypes.object,
}

export default AddCNAEModal
