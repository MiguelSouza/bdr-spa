import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { notification, Block, Button } from 'components'


const AvatarEdit = ({
  userId,
  avatar,
  createAvatar,
  setAvatar,
}) => {
  const [preview, setPreview] = useState(null)
  const [editImagem, setEditImagem] = useState(false)

  const onClose = () => {
    setPreview(null)
    setEditImagem(false)
  }

  const onCrop = (preview) => {
    setPreview(preview)
    setEditImagem(true)
  }

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 300000) {
      notification.error({
        message: 'toobig',
        description: '',
      })
      // eslint-disable-next-line no-param-reassign
      elem.target.value = ''
    }
  }

  const tratarAvatar = () => {
    return new Blob([preview], { type: 'text/plain' })
  }

  const handleImageSave = () => {
    preview !== 'null' ? setAvatar(preview) : setAvatar(null)
    const imageToSend = tratarAvatar()
    createAvatar({
      variables: {
        file: imageToSend,
        id: userId,
      },
    })
    notification.success({
      message: 'SAVE',
      description: '',
    })
    setEditImagem(false)
    setPreview(null)
  }

  return (
    <>
      <DivAvatar>
    
        <StyledAvatar>
          {!editImagem ? <Button block onClick={() => setEditImagem(true)}>EDIT</Button>
            : (
              <Avatar
                width={200}
                height={200}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={preview}
              />
            )}
        </StyledAvatar>
        {
          editImagem && <Button type="primary" onClick={handleImageSave} block>SAVE</Button>
        }
      </DivAvatar>
    </>
  )
}

AvatarEdit.propTypes = {
  userId: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  setAvatar: PropTypes.func.isRequired,
  createAvatar: PropTypes.func.isRequired,
}

export default AvatarEdit
