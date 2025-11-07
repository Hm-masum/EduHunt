import PaymentHistoryOfTutor from "@/components/modules/Payment/PaymentHistoryOfTutor";
import { getPaymentHistoryOfTutor } from "@/services/Payment";

const PaymentHistoryPage = async () => {
  const { data: paymentData } = await getPaymentHistoryOfTutor();
  return (
    <div>
      <PaymentHistoryOfTutor paymentData={paymentData} />
    </div>
  );
};

export default PaymentHistoryPage;
