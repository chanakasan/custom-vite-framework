export default function ButtonMain({ variant, className, children, ...rest }) {
  const styles = {}
  styles.btn = `
    block
    bg-green-500
    rounded-sm
    text-gray-100
    px-4 py-2
  `
  if (className) {
    styles.btn += ` ${className}`
  }
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  )
}

ButtonMain.defaultProps = {
  variant: 'primary',
  children: 'No Name',
}