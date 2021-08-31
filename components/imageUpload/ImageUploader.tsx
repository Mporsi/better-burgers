import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: 'rgb(238, 238, 238)',
    borderStyle: 'dashed',
    backgroundColor: 'rgb(250, 250, 250)',
    color: 'rgb(189, 189, 189)',
    outline: 'none',
    transition: 'border 0.24s ease-in-out 0s',
  },
  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  thumb: {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
  },
  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  },
  img: {
    display: 'block',
    width: 'auto',
    height: '100%',
  },
})

export function ImageUploaderWithPreview() {
  const [files, setFiles] = useState<Array<File & { preview: string }>>([])
  const classes = useStyles()

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
      setFiles(files)
    },
  })

  const thumbs = files.map((file) => (
    <Paper className={classes.thumb} key={file.name}>
      <img src={file.preview} className={classes.img} alt={'preview picture'} />
    </Paper>
  ))

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <section className={classes.container}>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Typography>
          Drag and drop some files here, or click to select your picture
        </Typography>
      </div>
      <aside className={classes.thumbsContainer}>{thumbs}</aside>
    </section>
  )
}
